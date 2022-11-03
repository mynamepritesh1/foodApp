import { CartItem } from "./cartItem";

export class Cart{
    items:CartItem[] = [];
    totalPrice: number =0;
    totalCount: number = 0;

//   subscribe: any;

//     get totalPrice():number{
//         let totalPrice = 0;
//         this.items.forEach(item => {
//             totalPrice += item.price;
            
//         });
//         return totalPrice;
//     }
} 