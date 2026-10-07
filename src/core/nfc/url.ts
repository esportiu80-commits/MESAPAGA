import{signTableToken}from"./token";
export function tableUrl(baseUrl:string,tableId:string,secret:string){return `${baseUrl.replace(/\/$/,"")}/t/${encodeURIComponent(signTableToken(tableId,secret))}`}
