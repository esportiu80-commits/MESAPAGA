export type MenuDesignRequest={restaurantId:string;instruction:string;changes:{type:"TEXT"|"IMAGE"|"CATEGORY"|"PRICE"|"DELETE";targetId?:string;value?:string|number}[]};
export type MenuDesignDecision={autoPublish:boolean;needsReview:boolean;reasons:string[]};
export function assessMenuDesignRequest(r:MenuDesignRequest):MenuDesignDecision{const reasons:string[]=[];const hasPrice=r.changes.some(c=>c.type==="PRICE");const deletes=r.changes.filter(c=>c.type==="DELETE").length;if(hasPrice)reasons.push("PRICE_CHANGE");if(deletes>=5)reasons.push("BULK_DELETE");const needsReview=hasPrice||deletes>=5;return{autoPublish:!needsReview,needsReview,reasons};}
export function permanentMenuEntry(restaurantSlug:string){return `/m/${encodeURIComponent(restaurantSlug)}`;}
