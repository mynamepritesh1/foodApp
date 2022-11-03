import { Component, OnInit } from '@angular/core';
import { User } from '../modal/user';
import { CartService } from '../services/cart.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
totalItemNumber = 0;
user!: User;
//showing cart item increase automatically

  constructor(cartService: CartService , private userService: UserService) {
    cartService.getCartObservable().subscribe((newCart)=>{
   this.totalItemNumber = newCart.totalCount;
    })
    userService.userObservable.subscribe((newUser)=>{
      this.user = newUser;
    })
      
    
   }

  ngOnInit(): void {
    // ng s -o
  }
  logout(){
    this.userService.logout()
  }
  get isAuth(){
    return this.user.token;
  }
 }