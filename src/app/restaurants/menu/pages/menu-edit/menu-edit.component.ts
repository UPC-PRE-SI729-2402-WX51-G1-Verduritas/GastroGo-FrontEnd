import { Component } from '@angular/core';
import {SideNavigatorBarComponent} from "../../../../public/components/side-navigator-bar/side-navigator-bar.component";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-menu-edit',
  standalone: true,
    imports: [
        SideNavigatorBarComponent,MatIcon
    ],
  templateUrl: './menu-edit.component.html',
  styleUrl: './menu-edit.component.css'
})
export class MenuEditComponent {

}
