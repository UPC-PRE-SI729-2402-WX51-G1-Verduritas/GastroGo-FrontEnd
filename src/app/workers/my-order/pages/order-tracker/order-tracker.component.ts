import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-order-tracker',
  standalone: true,
  imports: [
    RouterLink,
       SideNavigatorBarComponent
  ],
  templateUrl: './order-tracker.component.html',
  styleUrl: './order-tracker.component.css'
})
export class OrderTrackerComponent {

}
