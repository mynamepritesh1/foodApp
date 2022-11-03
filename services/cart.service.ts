import { Injectable } from '@angular/core';
// import { ConsoleReporter } from 'jasmine';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../modal/cart';
import { CartItem } from '../modal/cartItem';
import { Foods } from '../modal/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);


  // setItem(){
  //   this.cart.items.push(new CartItem(food));

  // }

  addToCart(food: Foods): void {
    let cartItem = this.cart.items.find(item => item.food.id === food.id)
    if (cartItem) {
      this.changeQuantity(food.id, cartItem.quantity + 1);
      return;

    }
    this.cart.items.push(new CartItem(food))
    this.setCartToLocalStorage();
    
  }
  removeFromCart(foodId: number): void{
    this.cart.items = this.cart.items.filter(item => item.food.id !=foodId);
    this.setCartToLocalStorage();

  }
  changeQuantity(quantity:number,foodId:number){
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if(!cartItem) return;
    cartItem.quantity = quantity
    cartItem.price = quantity * cartItem.food.price;
    this.setCartToLocalStorage();

  }
  getCartObservable():Observable<Cart>{
    return this.cartSubject.asObservable();
  }
  getCart(){
    return this.cartSubject.value;
  }
  clearCart(){
    this.cart= new Cart;
    this.setCartToLocalStorage();

  }
  private setCartToLocalStorage():void{
    this.cart.totalPrice=
    this.cart.items.reduce((prevSum, currentItem)=> prevSum + currentItem.price,0)

    this.cart.totalCount=
    this.cart.items.reduce((prevSum, currentItem)=> prevSum + currentItem.quantity,0)

    const cartJson =JSON.stringify(this.cart);
    localStorage.setItem('Cart',cartJson);
    this.cartSubject.next(this.cart);
  }
  private getCartFromLocalStorage():Cart{
    const cartJson = localStorage.getItem('Cart');
    return cartJson? JSON.parse(cartJson): new Cart();

  }

}
