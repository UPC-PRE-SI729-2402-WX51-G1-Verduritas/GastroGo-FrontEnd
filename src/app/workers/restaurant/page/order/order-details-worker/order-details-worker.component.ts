import { Component } from '@angular/core';
import {NgIf} from "@angular/common";
import {
  SideNavigatorBarComponent
} from "../../../../../public/components/side-navigator-bar/side-navigator-bar.component";
import {RouterLink} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {
  SideNavigatorBarRestaurantComponent
} from "../../../../../public/components/side-navigator-bar-restaurant/side-navigator-bar-restaurant.component";

@Component({
  selector: 'app-order-details-worker',
  standalone: true,
  imports: [
    NgIf,
    SideNavigatorBarRestaurantComponent, RouterLink, MatIcon
  ],
  templateUrl: './order-details-worker.component.html',
  styleUrl: './order-details-worker.component.css'
})
export class OrderDetailsWorkerComponent {
  PaymentButton: boolean=false;
}
