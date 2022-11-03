import { Foods } from "./app/modal/food"
import { Tag } from "./app/modal/tag"

export const sample_foods: Foods[] =[
    {
        id: 1, 
        name: 'Pizza Pepperoni',
        cookTime: '10-15',
        price: 299,
        favorite:  true,
        origins: ['Italy'] ,
        star : 4.5,
        imageUrl: "../assets/food1.jpg",
        tags: ['FastFood','Pizza' ,'Lunch'] 
       },
       {
        id: 2,
        name: 'Veg Burger',
        cookTime: '5-10',
        price: 99,
        favorite:  true,
        origins: ['America'] ,
        star :4.7,
        imageUrl: "../assets/food2.jpg",
        tags: ['FastFood','burger' ,'Breakfast'] 
       },
       {
        id: 3,
        name: 'Chicken Burger',
        cookTime: '5-7',
        price:109,
        favorite:  false,
        origins: ['America'] ,
        star : 4.3,
        imageUrl: "../assets/food3.jpg",
        tags: ['FastFood','Burger' ,'Lunch'] 
       },
       {
        id: 4,
        name: 'Chicken Masala',
        cookTime: '20-25',
        price: 199,
        favorite:  false,
        origins: ['India'],
        star :4.9,
        imageUrl: "../assets/food4.jpg",
        tags: ['Lunch','Chicken masala' ,'Dinner'] 
       },
       {
        id: 5,
        name: 'Chicken Kabab',
        cookTime: '5-10',
        price: 249,
        favorite:  true,
        origins: ['Middle East'],
        star :4.5,
        imageUrl: "../assets/food5.jpg",
        tags: ['FastFood','kabab' ,'Lunch'] 
       },
       {
        id: 6,
        name: 'Chicken Roll',
        cookTime: '10-15',
        price: 99,
        favorite:  true,
        origins: ['India'],
        star :4.5,
        imageUrl: "../assets/food6.jpg",
        tags: ['FastFood','Chicken roll' ,'Lunch'] 
       },
       {
        id: 7,
        name: 'chicken Lollypop',
        cookTime: '10-15',
        price: 199,
        favorite:  true,
        origins: ['India'] ,
        star :3.9,
        imageUrl: "../assets/food7.jpg",
        tags: ['FastFood','Chicken lollypop' ,'Lunch'] 
       },
       {
        id: 8,
        name: ' Masaledar chicken Lollypop',
        cookTime: '10-15',
        price: 239,
        favorite:  false,
        origins: ['India'] ,
        star :4.4,
        imageUrl: "../assets/food8.jpg",
        tags: ['FastFood','Masala chicken lollypop' ,'Lunch'] 
       },
       {
        id: 9,
        name: 'Chicken Plate',
        cookTime: '10-15',
        price: 249,
        favorite:  true,
        origins: ['India'],
        star :4.0,
        imageUrl: "../assets/food9.jpg",
        tags: ['Lunch','Chixken Thali' ,'Dinner'] 
       },
    
]

export const sample_tags:Tag[] =[
    {name: 'All', count: 14},
    {name: 'FastFood', count: 14},
    {name: 'Pizza', count: 14},
    {name: 'Lunch', count: 14},
    {name: 'Dinner', count: 14},
    {name: 'Burger', count: 14},
    {name: 'Roll', count: 14},
    {name: 'Soup', count: 14},
    {name: 'Chicken', count: 14},
    {name: 'Fry', count: 14},


]