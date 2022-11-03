import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Foods } from '../modal/food';
import { StarRatingComponent } from 'ng-starrating';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  foods: Foods[] = [];

  constructor(private fs: FoodService, router: ActivatedRoute) {
    let foodsObservable: Observable<Foods[]>;

    router.params.subscribe((params) => {
      if (params.searchTerm)
        foodsObservable = this.fs.getAllFoodBySearchTerm(params.searchTerm)
          //getAll().filter(food =>  food.name.toLocaleLowerCase().includes(params['searchItem'].toLocaleLowerCase()));
      else if (params.tag)
        foodsObservable = this.fs.getAllFoodByTag(params.tag)
      else
        foodsObservable = this.fs.getAll(); 
        foodsObservable.subscribe((serverFoods)=>{
          this.foods = serverFoods;
        })

    })
  }

  ngOnInit(): void { }

}
