export type PaymentState="created"|"requires_action"|"processing"|"confirmed"|"failed"|"cancelled"|"refunded";
const allowed:Record<PaymentState,PaymentState[]>={created:["requires_action","processing","failed","cancelled"],requires_action:["processing","failed","cancelled"],processing:["confirmed","failed"],confirmed:["refunded"],failed:[],cancelled:[],refunded:[]};
export function canTransition(from:PaymentState,to:PaymentState){return allowed[from].includes(to)}
export function transition(from:PaymentState,to:PaymentState){if(!canTransition(from,to))throw new Error(`INVALID_PAYMENT_TRANSITION:${from}->${to}`);return to}
