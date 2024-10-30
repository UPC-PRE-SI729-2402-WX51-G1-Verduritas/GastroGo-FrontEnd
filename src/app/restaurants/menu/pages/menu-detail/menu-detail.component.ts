import { Component } from '@angular/core';
import {SideNavigatorBarComponent} from "../../../../public/components/side-navigator-bar/side-navigator-bar.component";
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {
  SideNavigatorBarRestaurantComponent
} from "../../../../public/components/side-navigator-bar-restaurant/side-navigator-bar-restaurant.component";

@Component({
  selector: 'app-menu-detail',
  standalone: true,
  imports: [RouterLink,SideNavigatorBarRestaurantComponent, MatIcon],
  templateUrl: './menu-detail.component.html',
  styleUrl: './menu-detail.component.css'
})
export class MenuDetailComponent {
  menu = {
    id: '0001',
    appetizers: { edamame: 23, gyozas: 20 },
    mainDishes: { sushiNigiri: 42, ramenDeCerdo: 21 },
    drinks: { sake: 30, matcha: 5 },
    price: 16
  };
}
