import { Component } from '@angular/core';
import {MatCard} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {SideNavigatorBarComponent} from "../../../../public/components/side-navigator-bar/side-navigator-bar.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-cancel-order-dialog',
  standalone: true,
  imports:  [
  MatCard,
  MatIcon,
  MatButton,
  SideNavigatorBarComponent,
  RouterLink
],
  templateUrl: './cancel-order-dialog-restaurant.component.html',
  styleUrl: './cancel-order-dialog-restaurant.component.css'
})
export class CancelOrderDialogRestaurantComponent {

  closeDialog() {

  }
}
