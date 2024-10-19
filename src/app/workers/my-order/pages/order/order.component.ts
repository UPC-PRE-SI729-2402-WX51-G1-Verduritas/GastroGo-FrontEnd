import { Component } from '@angular/core';
import {MatCard} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {SideNavigatorBarComponent} from "../../../../public/components/side-navigator-bar/side-navigator-bar.component";

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [
    MatCard,
    MatIcon,
    MatButton,
    SideNavigatorBarComponent
  ],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
onSeeDetails() {

  }
}
