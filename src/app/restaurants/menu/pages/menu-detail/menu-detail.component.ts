import { Component } from '@angular/core';
import {SideNavigatorBarComponent} from "../../../../public/components/side-navigator-bar/side-navigator-bar.component";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-menu-detail',
  standalone: true,
  imports: [SideNavigatorBarComponent, MatIcon],
  templateUrl: './menu-detail.component.html',
  styleUrl: './menu-detail.component.css'
})
export class MenuDetailComponent {
  menu = {
    id: '0001',
    appetizers: { edamame: 23, gyozas: 20 },
    mainDishes: { sushiNigiri: 42, ramenDeCerdo: 21 },
    drinks: { sake: 30, matcha: 5 },
    price: 16
  };
}
