import { Component } from '@angular/core';
import {SideNavigatorBarComponent} from "../../../../public/components/side-navigator-bar/side-navigator-bar.component";
import {RouterLink, RouterModule} from "@angular/router";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-detail-restaurant',
  standalone: true,
  imports: [SideNavigatorBarComponent, RouterLink, SideNavigatorBarComponent, MatIcon],
  templateUrl: './detail-restaurant.component.html',
  styleUrl: './detail-restaurant.component.css'
})
export class DetailRestaurantComponent {

}
