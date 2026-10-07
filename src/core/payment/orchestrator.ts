import type{PaymentProvider}from"./types";
export type ProviderName="primary"|"secondary";
export class PaymentOrchestrator{constructor(private providers:Partial<Record<ProviderName,PaymentProvider>>){}
provider(name:ProviderName="primary"){const p=this.providers[name];if(!p)throw new Error("PAYMENT_PROVIDER_UNAVAILABLE");return p}
async create(name:ProviderName,input:{amountCents:number;currency:"EUR";idempotencyKey:string}){return this.provider(name).createPayment(input)}
}