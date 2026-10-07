import type{Order}from"@/core/domain";
export const demoOrder:Order={id:"ord_demo_001",restaurantId:"rest_demo",tableId:"table_1",externalOrderId:"pos_demo_1",status:"OPEN",items:[{id:"1",name:"Menú del día",quantity:2,unitCents:1800},{id:"2",name:"Agua",quantity:1,unitCents:250},{id:"3",name:"Café",quantity:2,unitCents:500}],totalCents:4850,paidCents:0,version:1};
