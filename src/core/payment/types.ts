export type PaymentStatus="CREATED"|"PENDING"|"AUTHORIZED"|"PAID"|"FAILED"|"CANCELLED"|"REFUNDED";
export interface Payment{id:string;orderId:string;amountCents:number;currency:"EUR";status:PaymentStatus;idempotencyKey:string;providerPaymentId?:string}
export interface PaymentProvider{createPayment(input:{amountCents:number;currency:"EUR";idempotencyKey:string}):Promise<{providerPaymentId:string;clientSecret?:string}>;getPayment(providerPaymentId:string):Promise<{status:PaymentStatus}>}
