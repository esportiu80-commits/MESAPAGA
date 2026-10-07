import type {Order} from "../domain";

export type PaymentClaim={amountCents:number;expectedVersion:number};

export function applyPaymentClaim(order:Order,claim:PaymentClaim):Order{
  if(claim.expectedVersion!==order.version) throw new Error("STALE_ORDER_VERSION");
  const pending=Math.max(0,order.totalCents-order.paidCents);
  if(!Number.isInteger(claim.amountCents)||claim.amountCents<=0) throw new Error("INVALID_AMOUNT");
  if(claim.amountCents>pending) throw new Error("AMOUNT_EXCEEDS_PENDING");
  const paidCents=order.paidCents+claim.amountCents;
  return {...order,paidCents,version:order.version+1,status:paidCents>=order.totalCents?"PAID":"PARTIALLY_PAID"};
}
