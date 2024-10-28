import { Component } from '@angular/core';
import {NgIf} from "@angular/common";
import {
  SideNavigatorBarComponent
} from "../../../../../public/components/side-navigator-bar/side-navigator-bar.component";
import {RouterLink} from "@angular/router";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-order-details-worker',
  standalone: true,
  imports: [
    NgIf,
    SideNavigatorBarComponent, RouterLink, MatIcon
  ],
  templateUrl: './order-details-worker.component.html',
  styleUrl: './order-details-worker.component.css'
})
export class OrderDetailsWorkerComponent {
  PaymentButton: boolean=false;
}
