import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../modal/order';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  order:Order = new Order();
  constructor(orderService: OrderService , router: Router) {
    orderService.getNewOrderForCurrentUser().subscribe({
      next:(order) =>{
        this.order =order;
      },
      error:()=>{
       router.navigateByUrl('/checkout');
      }
    })
   }

  ngOnInit(): void {
  }

}
