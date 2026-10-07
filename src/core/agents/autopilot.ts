export type AgentArea="SUPERVISOR"|"DEPLOYMENTS"|"PAYMENTS"|"TABLES_NFC_QR"|"SECURITY"|"MENU_DESIGN";
export type AgentAction={area:AgentArea;kind:string;risk:"LOW"|"MEDIUM"|"HIGH";restaurantId?:string;payload?:Record<string,unknown>};
export const requiresHumanApproval=(a:AgentAction)=>a.risk==="HIGH"||["MOVE_MONEY","CHANGE_BANK_ACCOUNT","ENABLE_LIVE_PAYMENTS","DELETE_DATA","CHANGE_SECURITY_POLICY"].includes(a.kind);
export const canAutoExecute=(a:AgentAction)=>!requiresHumanApproval(a);
export const routeIncident=(kind:string):AgentArea=>kind.includes("PAYMENT")?"PAYMENTS":kind.includes("NFC")||kind.includes("QR")||kind.includes("TABLE")?"TABLES_NFC_QR":kind.includes("MENU")||kind.includes("DESIGN")?"MENU_DESIGN":kind.includes("SECURITY")?"SECURITY":"DEPLOYMENTS";