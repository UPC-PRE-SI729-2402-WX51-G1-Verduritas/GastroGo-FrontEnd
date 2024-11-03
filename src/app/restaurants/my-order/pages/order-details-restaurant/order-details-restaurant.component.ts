import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {RouterLink} from "@angular/router";
import {SideNavigatorBarComponent} from "../../../../public/components/side-navigator-bar/side-navigator-bar.component";
import {
  SideNavigatorBarRestaurantComponent
} from "../../../../public/components/side-navigator-bar-restaurant/side-navigator-bar-restaurant.component";

@Component({
  selector: 'app-order-details-restaurant',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatButtonModule, MatCheckboxModule, RouterLink, SideNavigatorBarRestaurantComponent],
  templateUrl: './order-details-restaurant.component.html',
  styleUrl: './order-details-restaurant.component.css'
})
export class OrderDetailsRestaurantComponent {
  cancelButton: boolean=false;
    UpdateButton: boolean=false;

}
