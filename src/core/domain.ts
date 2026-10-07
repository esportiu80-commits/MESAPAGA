export type OrderStatus="OPEN"|"PARTIALLY_PAID"|"PAID"|"CANCELLED";
export interface Restaurant{id:string;name:string;currency:"EUR";stripeAccountId?:string}
export interface Table{id:string;restaurantId:string;label:string;externalId:string;active:boolean}
export interface OrderItem{id:string;name:string;quantity:number;unitCents:number}
export interface Order{id:string;restaurantId:string;tableId:string;externalOrderId:string;status:OrderStatus;items:OrderItem[];totalCents:number;paidCents:number;version:number}
export const pendingCents=(o:Order)=>Math.max(0,o.totalCents-o.paidCents);
