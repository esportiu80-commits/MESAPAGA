export type MesapagaEvent=
|{type:"table.opened";restaurantId:string;tableId:string;at:string}
|{type:"checkout.started";orderId:string;amountCents:number;at:string}
|{type:"payment.confirmed";orderId:string;paymentId:string;amountCents:number;at:string}
|{type:"pos.sync.requested";orderId:string;at:string};
export interface EventPublisher{publish(event:MesapagaEvent):Promise<void>}
