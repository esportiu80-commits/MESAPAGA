export type ReconciliationStatus="pending"|"matched"|"mismatch"|"pos_pending";
export type ReconciliationRecord={orderId:string;paymentId:string;providerReference:string;amountCents:number;currency:"EUR";status:ReconciliationStatus;confirmedAt:string;posSyncedAt?:string};
