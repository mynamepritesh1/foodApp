import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Order } from '../modal/order';
import { CartService } from '../services/cart.service';
import { OrderService } from '../services/order.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  order: Order = new Order;
  checkoutForm!: FormGroup;

  constructor(
    cartService: CartService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toasterService: ToastrService,
    private orderService:OrderService,
    private router:Router
  ) {
    const cart = cartService.getCart();
    this.order.items = cart.items;
    this.order.totalPrice = cart.totalPrice;

  }

  ngOnInit(): void {
    let { name, address } = this.userService.currentUser;
    this.checkoutForm = this.formBuilder.group({
      name: [name, Validators.required],
      address: [address, Validators.required],

    });
  }

  get fc() {
    return this.checkoutForm.controls;
  }

  createorder() {
    if (this.checkoutForm.invalid) {
      this.toasterService.warning('please fill the inputs', 'Invalid inputs');
      return;
    }

    if (!this.order.addressLatlng) {
      this.toasterService.warning('please select your location on map', 'Location');
      return;

    }

    this.order.name = this.fc.name.value;
    this.order.address = this.fc.address.value;
   
    this.orderService.create(this.order).subscribe({
      next:()=>{
        this.router.navigateByUrl('/payment');
      },
      error:(errorResponse)=>{
        this.toasterService.error(errorResponse.error, "Cart");
      }
    })

  }

}
