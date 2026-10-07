import Stripe from"stripe";import type{PaymentProvider,PaymentStatus,CreatePaymentInput}from"./types";
const mapStatus=(s:Stripe.PaymentIntent.Status):PaymentStatus=>s==="succeeded"?"PAID":s==="canceled"?"CANCELLED":s==="processing"?"PENDING":s==="requires_capture"?"AUTHORIZED":s==="requires_payment_method"?"FAILED":"PENDING";
export class StripePaymentProvider implements PaymentProvider{
private stripe:Stripe;constructor(secretKey:string){if(!secretKey)throw new Error("STRIPE_SECRET_KEY_REQUIRED");this.stripe=new Stripe(secretKey)}
async createPayment(input:CreatePaymentInput){
  if(!input.connectedAccountId)throw new Error("RESTAURANT_PAYMENT_ACCOUNT_REQUIRED");
  const params:Stripe.PaymentIntentCreateParams={amount:input.amountCents,currency:"eur",automatic_payment_methods:{enabled:true},metadata:{mesapaga:"true",restaurantId:input.restaurantId??"",orderId:input.orderId??""}};
  if(input.applicationFeeCents&&input.applicationFeeCents>0)params.application_fee_amount=input.applicationFeeCents;
  const pi=await this.stripe.paymentIntents.create(params,{idempotencyKey:input.idempotencyKey,stripeAccount:input.connectedAccountId});
  return{providerPaymentId:pi.id,clientSecret:pi.client_secret??undefined}
}
async getPayment(id:string,connectedAccountId?:string){const pi=await this.stripe.paymentIntents.retrieve(id,{},connectedAccountId?{stripeAccount:connectedAccountId}:undefined);return{status:mapStatus(pi.status)}}
constructWebhook(payload:string|Buffer,signature:string,secret:string){return this.stripe.webhooks.constructEvent(payload,signature,secret)}
}
