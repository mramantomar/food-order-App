import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

getFoodById(id:number):Foods{
  return this.getAll().find(food =>food.id==id)!;

}



  getAllFoodByTag(tag:string):Foods[]{
    if(tag=='all')
    return this.getAll();
    else
    return this.getAll().filter(food =>food.tags?.includes(tag));
  }
  getAllTag():Tag[]{
    return [
      {name: 'all', count : 8},
      {name: 'fastfood', count : 4},
      {name: 'pizza', count : 1},
      {name: 'burger', count : 1},
      {name: 'lunch', count : 3},
      {name: 'chicken', count : 1},
      {name: 'fish', count : 1},
      {name: 'healthy', count : 2},
      {name: 'dinner', count : 1},
      {name: 'pasta', count : 1},
      {name: 'breakfast', count : 1},
      

    ]
  }
  getAll():Foods[] {
    return [
      {
        id: 1,
        name: 'Hot Spicy Burger',
        cookTime: '10-20 min',
        price: 80,
        favorite: false,
        origins: ['India ,','Italy ,' ,'Australia '],
        star: 4.5 ,
        imageUrl: '/assets/burger.jpg',
        tags: ['fastfood','burger','Lunch']
      },
      {
        id: 2,
        name: 'punjabi chole bhature',
        cookTime: '15-25 min',
        price: 100,
        favorite: true,
        origins: ['India'],
        star: 4,
        imageUrl: '/assets/chole.jpg',
        tags: ['fastfood','chole bhature','Lunch']
      },
      {
        id: 3,
        name: 'Amritsari kulcha',
        cookTime: '15-25 min',
        price: 150,
        favorite: true,
        origins: ['India'],
        star: 4.6,
        imageUrl: '/assets/d.jpg',
        tags: ['kulcha','lunch','dinner','breakfast']
      },
      {
        id: 4,
        name: 'Red sauce pasta ',
        cookTime: '15-20 min',
        price: 120,
        favorite: false,
        origins: ['Italy'],
        star: 3.5,
        imageUrl: '/assets/food.jpg',
        tags: ['pasta']
      },
      {
        id: 5,
        name: 'Baked fish ',
        cookTime: '25-30 min',
        price: 250,
        favorite: false,
        origins: ['Kolkata ,','london ,',' cape town'],
        star: 3.9,
        imageUrl: '/assets/ht.jpg',
        tags: ['healthy','fish']
      },
      {
        id: 6,
        name: 'Cheese Burst Pizza ',
        cookTime: '15-20 min',
        price: 150,
        favorite: false,
        origins: ['Italy ,' , 'India ,', 'Florida ,' ,'Germany'],
        star: 4.2,
        imageUrl: '/assets/imag.jpg',
        tags: ['fastfood','pizza']
      },
      {
        id: 7,
        name: ' chinese Noodles',
        cookTime: '15-20 min',
        price: 125,
        favorite: false,
        origins: ['India ,','chinese ,','japan ,','hongkong ,','bangkok'],
        star: 4.8,
        imageUrl: '/assets/it.jpg',
        tags: ['fastfood','noodles']
      },
      {
        id: 8,
        name: 'chicken  ',
        cookTime: '15-20 min',
        price: 400,
        favorite: false,
        origins: ['Australia ,' ,'India'],
        star: 3.5,
        imageUrl: '/assets/met.jpg',
        tags: ['healthy','chicken']
      },



    ];

  }
  
}
