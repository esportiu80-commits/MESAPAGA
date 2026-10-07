import test from "node:test";
import assert from "node:assert/strict";
import {applyPaymentClaim} from "../src/core/payment/concurrency.ts";

const order=()=>({id:"o1",restaurantId:"r1",tableId:"t1",externalOrderId:"x1",status:"OPEN",items:[],totalCents:4850,paidCents:0,version:1});

test("two phones cannot confirm against the same stale order version",()=>{
  const initial=order();
  const afterPhoneA=applyPaymentClaim(initial,{amountCents:2425,expectedVersion:1});
  assert.equal(afterPhoneA.paidCents,2425);
  assert.equal(afterPhoneA.status,"PARTIALLY_PAID");
  assert.equal(afterPhoneA.version,2);
  assert.throws(()=>applyPaymentClaim(afterPhoneA,{amountCents:2425,expectedVersion:1}),/STALE_ORDER_VERSION/);
});

test("second phone can refresh and pay the remaining balance",()=>{
  const first=applyPaymentClaim(order(),{amountCents:2425,expectedVersion:1});
  const second=applyPaymentClaim(first,{amountCents:2425,expectedVersion:2});
  assert.equal(second.paidCents,4850);
  assert.equal(second.status,"PAID");
  assert.equal(second.version,3);
});

test("three-phone split never exceeds the table total",()=>{
  const a=applyPaymentClaim(order(),{amountCents:1617,expectedVersion:1});
  const b=applyPaymentClaim(a,{amountCents:1617,expectedVersion:2});
  assert.throws(()=>applyPaymentClaim(b,{amountCents:1617,expectedVersion:3}),/AMOUNT_EXCEEDS_PENDING/);
  const c=applyPaymentClaim(b,{amountCents:1616,expectedVersion:3});
  assert.equal(c.paidCents,4850);
  assert.equal(c.status,"PAID");
});
