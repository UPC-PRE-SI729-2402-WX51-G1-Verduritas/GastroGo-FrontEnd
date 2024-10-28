import { Component } from '@angular/core';
import {MatCard} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {SideNavigatorBarComponent} from "../../../../public/components/side-navigator-bar/side-navigator-bar.component";
import {RouterLink} from "@angular/router";
import {
  SideNavigatorBarRestaurantComponent
} from "../../../../public/components/side-navigator-bar-restaurant/side-navigator-bar-restaurant.component";

@Component({
  selector: 'app-order-restaurant',
  standalone: true,
  imports: [
    MatCard,
    MatIcon,
    MatButton,
    SideNavigatorBarComponent,
    RouterLink,
    SideNavigatorBarRestaurantComponent
  ],
  templateUrl: './order-restaurant.component.html',
  styleUrl: './order-restaurant.component.css'
})
export class OrderRestaurantComponent {
onSeeDetails() {

  }
}
