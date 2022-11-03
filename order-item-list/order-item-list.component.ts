import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../modal/order';

@Component({
  selector: 'order-item-list',
  templateUrl: './order-item-list.component.html',
  styleUrls: ['./order-item-list.component.scss']
})
export class OrderItemListComponent implements OnInit {
  @Input()
  order!:Order;
  
  constructor() { }

  ngOnInit(): void {
  }

}
