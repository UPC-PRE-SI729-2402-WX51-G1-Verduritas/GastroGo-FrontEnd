import { Component } from '@angular/core';
import {MatCard} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {SideNavigatorBarComponent} from "../../components/side-navigator-bar/side-navigator-bar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCard,
    MatIcon,
    SideNavigatorBarComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
