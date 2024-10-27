import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {SideNavigatorBarComponent} from "../../../../public/components/side-navigator-bar/side-navigator-bar.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatButtonModule, MatCheckboxModule, SideNavigatorBarComponent, RouterLink],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css'
})
export class OrderDetailsComponent {
  cancelButton: boolean=false;
}
