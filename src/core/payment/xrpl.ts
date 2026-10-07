export type XrplPaymentObservation={txHash:string;validated:boolean;result:string;destination:string;deliveredDrops:string};
export function verifyXrpPayment(input:XrplPaymentObservation,expected:{destination:string;drops:string}){
 if(!input.validated)throw new Error("XRPL_PAYMENT_NOT_VALIDATED");
 if(input.result!=="tesSUCCESS")throw new Error("XRPL_PAYMENT_FAILED");
 if(input.destination!==expected.destination)throw new Error("XRPL_WRONG_DESTINATION");
 if(input.deliveredDrops!==expected.drops)throw new Error("XRPL_WRONG_AMOUNT");
 return{confirmed:true,txHash:input.txHash};
}
