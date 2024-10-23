import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";

@Component({
  selector: 'app-order-details-restaurant',
  standalone: true,
  imports:  [CommonModule, MatInputModule, MatButtonModule, MatCheckboxModule],
  templateUrl: './order-details-restaurant.component.html',
  styleUrl: './order-details-restaurant.component.css'
})
export class OrderDetailsRestaurantComponent {

}