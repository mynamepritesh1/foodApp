import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from '../modal/cart';
import { CartItem } from '../modal/cartItem';
import { Foods } from '../modal/food';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
   cart!: Cart;
  constructor(private cartService: CartService) {
    this.cartService.getCartObservable().subscribe((cart)=>{
      this.cart = cart;
    })
   }

  ngOnInit(): void {
  }
  // setCart(){
  //   this.cart = this.cartService.getCart();
  // }
  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    // this.setCart();
    console.log(cartItem);
    
  }
  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id,quantity);
    // this.setCart();
  }
  // addToCart(food: Foods): void {
  //   // this.cart.items.push(new CartItem(food))
  //   this.cartService.addToCart(food);
    
  // }


}
