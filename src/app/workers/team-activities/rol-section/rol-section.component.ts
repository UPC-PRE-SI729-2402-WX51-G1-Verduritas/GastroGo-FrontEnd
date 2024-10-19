import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {SideNavigatorBarComponent} from "../../../public/components/side-navigator-bar/side-navigator-bar.component";

@Component({
  selector: 'app-rol-section',
  standalone: true,
  imports: [
    MatButton,
    SideNavigatorBarComponent
  ],
  templateUrl: './rol-section.component.html',
  styleUrl: './rol-section.component.css'
})
export class RolSectionComponent {

}
