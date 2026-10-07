export type ServiceState="HEALTHY"|"DEGRADED"|"DOWN";
export type OperationalState={web:ServiceState;payments:ServiceState;menu:ServiceState;tableAccess:ServiceState};
export function customerMode(s:OperationalState){if(s.tableAccess==="DOWN")return"SHOW_RECOVERY";if(s.payments!=="HEALTHY")return"VIEW_ONLY";return"NORMAL";}
export function canMarkPaid(input:{providerConfirmed:boolean;webhookVerified:boolean;amountMatches:boolean;orderAlreadyPaid:boolean}){return input.providerConfirmed&&input.webhookVerified&&input.amountMatches&&!input.orderAlreadyPaid;}
export function restaurantHealth(s:OperationalState){const values=Object.values(s);return values.includes("DOWN")?"ACTION_REQUIRED":values.includes("DEGRADED")?"WATCH":"OK";}
