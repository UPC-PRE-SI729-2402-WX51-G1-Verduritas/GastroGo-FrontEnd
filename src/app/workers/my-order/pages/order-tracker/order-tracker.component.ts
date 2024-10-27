import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {SideNavigatorBarComponent} from "../../../../public/components/side-navigator-bar/side-navigator-bar.component";

@Component({
  selector: 'app-order-tracker',
  standalone: true,
  imports: [
    RouterLink,SideNavigatorBarComponent
  ],
  templateUrl: './order-tracker.component.html',
  styleUrl: './order-tracker.component.css'
})
export class OrderTrackerComponent {

}
