import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // fooddetails

  foodDetails = [
    {
      id:1,
      foodName:"Lavash with cheese",
      foodDetails:"Lavash with cheese",
      foodPrice:5,
      foodImg:"../../assets/img/97558.jpg"
    },
    {
      id:2,
      foodName:"Big Pizza",
      foodDetails:"lorem imsum lorem",
      foodPrice:9,
      foodImg:"../../assets/img/Pizza01.jpg"
    },
    {
      id:3,
      foodName:"Big Burger",
      foodDetails:"Big Burger",
      foodPrice:7,
      foodImg:"../../assets/img/photo-1568901346375-23c9450c58cd.jpg"
    },
    {id:4,
      foodName:"Big Lavash",
      foodDetails:"Lavash with cheese",
      foodPrice:6,
      foodImg:"../../assets/img/e5cf46fe408969ec32e6e5b707ed8cf5.jpg"
    },
    {
      id:5,
      foodName:"Klab SendWich",
      foodDetails:"Klab SendWich",
      foodPrice:3,
      foodImg:"../../assets/img/side-view-club-sandwich-with-french-fries-and-ketchup-with-mayonnaise_140725-11440.avif"
    },
    {
      id:6,
      foodName:"Lavash with cheese",
      foodDetails:"Lavash with cheese",
      foodPrice:5,
      foodImg:"../../assets/img/97558.jpg"
    }
  ]
}
