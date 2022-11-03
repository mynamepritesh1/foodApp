import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { servicesVersion } from 'typescript';
import { Foods } from '../modal/food';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.scss']
})
export class FoodpageComponent implements OnInit {
  food!: Foods;
  constructor(activatedRoute: ActivatedRoute, 
    foodService: FoodService, private cartService: CartService
    ,private router : Router) {
    activatedRoute.params.subscribe((params) => {
      if (params.id)
        foodService.getFoodById(params.id).subscribe(serverFood =>{
          this.food =serverFood;
          // console.log(serverFood)
        })

    })
  }

  ngOnInit(): void {
  }
  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

}