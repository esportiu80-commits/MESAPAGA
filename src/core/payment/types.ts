export type PaymentStatus="CREATED"|"PENDING"|"AUTHORIZED"|"PAID"|"FAILED"|"CANCELLED"|"REFUNDED";
export interface Payment{id:string;orderId:string;amountCents:number;currency:"EUR";status:PaymentStatus;idempotencyKey:string;providerPaymentId?:string}
export interface CreatePaymentInput{amountCents:number;currency:"EUR";idempotencyKey:string;connectedAccountId?:string;applicationFeeCents?:number;restaurantId?:string;orderId?:string}
export interface PaymentProvider{createPayment(input:CreatePaymentInput):Promise<{providerPaymentId:string;clientSecret?:string}>;getPayment(providerPaymentId:string,connectedAccountId?:string):Promise<{status:PaymentStatus}>}
