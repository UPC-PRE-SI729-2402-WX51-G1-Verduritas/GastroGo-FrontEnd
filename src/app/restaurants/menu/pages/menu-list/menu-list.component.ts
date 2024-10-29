import { Component } from '@angular/core';
import {SideNavigatorBarComponent} from "../../../../public/components/side-navigator-bar/side-navigator-bar.component";
import {RouterLink} from "@angular/router";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [SideNavigatorBarComponent,RouterLink,MatIcon],
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.css'
})
export class MenuListComponent {

}
