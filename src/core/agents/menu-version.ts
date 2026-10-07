export type MenuVersion<T>={version:number;createdAt:string;createdBy:"OWNER"|"MENU_DESIGN_AGENT";data:T};
export function createMenuVersion<T>(previous:MenuVersion<T>|undefined,data:T,createdBy:MenuVersion<T>["createdBy"]):MenuVersion<T>{return{version:(previous?.version??0)+1,createdAt:new Date().toISOString(),createdBy,data};}
export function rollbackMenu<T>(history:MenuVersion<T>[],version:number){const found=history.find(v=>v.version===version);if(!found)throw new Error("MENU_VERSION_NOT_FOUND");return found;}
