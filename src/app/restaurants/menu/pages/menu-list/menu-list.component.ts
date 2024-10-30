import { Component } from '@angular/core';
import {SideNavigatorBarComponent} from "../../../../public/components/side-navigator-bar/side-navigator-bar.component";
import {RouterLink} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {
  SideNavigatorBarRestaurantComponent
} from "../../../../public/components/side-navigator-bar-restaurant/side-navigator-bar-restaurant.component";

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [SideNavigatorBarRestaurantComponent,RouterLink,MatIcon],
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.css'
})
export class MenuListComponent {

}
