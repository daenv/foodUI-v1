import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/foods/Food';
import { FoodService } from '../../../services/foods/food.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];

  constructor(
    private foodService: FoodService,
    Route: ActivatedRoute
  ) {
    Route.params.subscribe(p => {
      // @ts-ignore
      if (p.searchItem) {
        // @ts-ignore
        this.foods = foodService.getAllFoodByName(p.searchItem)
        // @ts-ignore
      } else if (p.tag) {
        // @ts-ignore
        this.foods = foodService.getAllFoodByTag(p.tag)
      } else this.foods = foodService.getAll();
    })
  }

  ngOnInit(): void { }
}
