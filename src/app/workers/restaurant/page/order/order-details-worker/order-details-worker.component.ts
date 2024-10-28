import { Component } from '@angular/core';
import {NgIf} from "@angular/common";
import {
  SideNavigatorBarComponent
} from "../../../../../public/components/side-navigator-bar/side-navigator-bar.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-order-details-worker',
  standalone: true,
  imports: [
    NgIf,
    SideNavigatorBarComponent, RouterLink
  ],
  templateUrl: './order-details-worker.component.html',
  styleUrl: './order-details-worker.component.css'
})
export class OrderDetailsWorkerComponent {
  cancelButton: boolean=false;
}
