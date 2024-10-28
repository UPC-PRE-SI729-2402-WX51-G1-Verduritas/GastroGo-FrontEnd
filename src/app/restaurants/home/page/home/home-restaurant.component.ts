import { Component } from '@angular/core';
import {RecentOrdersComponent} from "../../components/recent-orders/recent-orders.component";
import {ReputationComponent} from "../../components/reputation/reputation.component";
import {
  SideNavigatorBarRestaurantComponent
} from "../../../../public/components/side-navigator-bar-restaurant/side-navigator-bar-restaurant.component";
import {SideNavigatorBarComponent} from "../../../../public/components/side-navigator-bar/side-navigator-bar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RecentOrdersComponent,
    ReputationComponent,
    SideNavigatorBarRestaurantComponent,
    SideNavigatorBarComponent
  ],
  templateUrl: './home-restaurant.component.html',
  styleUrl: './home-restaurant.component.css'
})
export class HomeRestaurantComponent {

}
