import type{PaymentProvider,PaymentStatus}from"./types";
export class MockPaymentProvider implements PaymentProvider{async createPayment(input:{amountCents:number;currency:"EUR";idempotencyKey:string}){return{providerPaymentId:`mock_${input.idempotencyKey}`,clientSecret:"mock_client_secret"}}async getPayment(_id:string):Promise<{status:PaymentStatus}>{return{status:"PAID"}}}
