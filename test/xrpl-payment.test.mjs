import test from"node:test";import assert from"node:assert/strict";import{verifyXrpPayment}from"../src/core/payment/xrpl.ts";
const expected={destination:"rRestaurantDemo",drops:"2500000"};
const base={txHash:"ABC123",validated:true,result:"tesSUCCESS",destination:expected.destination,deliveredDrops:expected.drops};
test("validated XRP payment can settle a table",()=>assert.deepEqual(verifyXrpPayment(base,expected),{confirmed:true,txHash:"ABC123"}));
test("unvalidated XRP payment cannot settle a table",()=>assert.throws(()=>verifyXrpPayment({...base,validated:false},expected),/XRPL_PAYMENT_NOT_VALIDATED/));
test("wrong XRP destination is rejected",()=>assert.throws(()=>verifyXrpPayment({...base,destination:"rAttacker"},expected),/XRPL_WRONG_DESTINATION/));
test("wrong XRP amount is rejected",()=>assert.throws(()=>verifyXrpPayment({...base,deliveredDrops:"2499999"},expected),/XRPL_WRONG_AMOUNT/));
