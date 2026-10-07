import type{Order}from"../domain";import type{PaymentProvider}from"./types";
export class PaymentService{private provider:PaymentProvider;constructor(provider:PaymentProvider){this.provider=provider}
async create(order:Order,amountCents:number,idempotencyKey:string){const pending=Math.max(0,order.totalCents-order.paidCents);if(!Number.isInteger(amountCents)||amountCents<=0)throw new Error("INVALID_AMOUNT");if(amountCents>pending)throw new Error("AMOUNT_EXCEEDS_PENDING");return this.provider.createPayment({amountCents,currency:"EUR",idempotencyKey})}}
