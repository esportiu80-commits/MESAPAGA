import type{AgentAction,AgentArea}from"./autopilot";
export type AuditEvent={id:string;at:string;agent:AgentArea;action:string;restaurantId?:string;status:"PLANNED"|"EXECUTED"|"BLOCKED"|"ROLLED_BACK";details?:Record<string,unknown>};
export function auditEvent(action:AgentAction,status:AuditEvent["status"],details?:Record<string,unknown>):AuditEvent{return{id:crypto.randomUUID(),at:new Date().toISOString(),agent:action.area,action:action.kind,restaurantId:action.restaurantId,status,details};}
export type HealthSnapshot={healthy:boolean;checks:{name:string;ok:boolean}[]};
export function shouldRollback(h:HealthSnapshot){return!h.healthy||h.checks.some(c=>!c.ok);}
