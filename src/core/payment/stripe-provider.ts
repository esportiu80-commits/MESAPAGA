import Stripe from"stripe";import type{PaymentProvider,PaymentStatus}from"./types";
const mapStatus=(s:Stripe.PaymentIntent.Status):PaymentStatus=>s==="succeeded"?"PAID":s==="canceled"?"CANCELLED":s==="processing"?"PENDING":s==="requires_capture"?"AUTHORIZED":s==="requires_payment_method"?"FAILED":"PENDING";
export class StripePaymentProvider implements PaymentProvider{
private stripe:Stripe;constructor(secretKey:string){if(!secretKey)throw new Error("STRIPE_SECRET_KEY_REQUIRED");this.stripe=new Stripe(secretKey)}
async createPayment(input:{amountCents:number;currency:"EUR";idempotencyKey:string}){const pi=await this.stripe.paymentIntents.create({amount:input.amountCents,currency:"eur",automatic_payment_methods:{enabled:true},metadata:{mesapaga:"true"}},{idempotencyKey:input.idempotencyKey});return{providerPaymentId:pi.id,clientSecret:pi.client_secret??undefined}}
async getPayment(id:string){const pi=await this.stripe.paymentIntents.retrieve(id);return{status:mapStatus(pi.status)}}
constructWebhook(payload:string|Buffer,signature:string,secret:string){return this.stripe.webhooks.constructEvent(payload,signature,secret)}
}
