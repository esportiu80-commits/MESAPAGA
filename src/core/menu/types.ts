export interface MenuCategory{id:string;restaurantId:string;name:string;sortOrder:number;active:boolean}
export interface MenuItem{id:string;restaurantId:string;categoryId:string;name:string;description?:string;priceCents:number;allergens:string[];imageUrl?:string;available:boolean;sortOrder:number}
export interface RestaurantMenu{restaurantId:string;updatedAt:string;categories:MenuCategory[];items:MenuItem[]}
export function visibleMenu(menu:RestaurantMenu):RestaurantMenu{return{...menu,categories:menu.categories.filter(c=>c.active).sort((a,b)=>a.sortOrder-b.sortOrder),items:menu.items.filter(i=>i.available).sort((a,b)=>a.sortOrder-b.sortOrder)}}
