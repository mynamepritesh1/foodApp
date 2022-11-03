import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../modal/tag';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
  @Input()
  foodPageTag?: string[];

  @Input()
  justifyContent :string = 'center'
  
  tags?: Tag[];
  constructor(fs: FoodService) { 
    fs.getAllTag().subscribe(serverTags =>{
      this.tags = serverTags;
    });
  }

  ngOnInit(): void {
   
  }
  // list=[
  //   {name: 'All', count: 14},
  //   {name: 'FastFood', count: 14},
  //   {name: 'Pizza', count: 14},
  //   {name: 'Lunch', count: 14},
  //   {name: 'Dinner', count: 14},
  //   {name: 'Burger', count: 14},
  //   {name: 'Roll', count: 14},
  //   {name: 'Soup', count: 14},
  //   {name: 'Chicken', count: 14},
  //   {name: 'Fry', count: 14},



  // ];
  // getCount(name: string){
  //   return this.list.filter(o => o.name === name).length;
    
  // }
  // console.log(list)
 
}
