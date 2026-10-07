import type{Order,Restaurant}from"../domain.ts";import{restaurantCanAcceptPayments}from"../domain.ts";import type{PaymentProvider}from"./types.ts";
export class PaymentService{private provider:PaymentProvider;constructor(provider:PaymentProvider){this.provider=provider}
async create(order:Order,amountCents:number,idempotencyKey:string,restaurant?:Restaurant,applicationFeeCents=0){
 const pending=Math.max(0,order.totalCents-order.paidCents);
 if(!Number.isInteger(amountCents)||amountCents<=0)throw new Error("INVALID_AMOUNT");
 if(amountCents>pending)throw new Error("AMOUNT_EXCEEDS_PENDING");
 if(restaurant&&!restaurantCanAcceptPayments(restaurant))throw new Error("RESTAURANT_PAYMENTS_NOT_ACTIVE");
 return this.provider.createPayment({amountCents,currency:"EUR",idempotencyKey,connectedAccountId:restaurant?.stripeAccountId,applicationFeeCents,restaurantId:order.restaurantId,orderId:order.id})
}}