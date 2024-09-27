import { Component } from '@angular/core';
import {MatSidenavContainer} from "@angular/material/sidenav";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-side-navigator-bar',
  standalone: true,
  imports: [
    MatSidenavContainer,
    MatIcon
  ],
  templateUrl: './side-navigator-bar.component.html',
  styleUrl: './side-navigator-bar.component.css'
})
export class SideNavigatorBarComponent {

}
