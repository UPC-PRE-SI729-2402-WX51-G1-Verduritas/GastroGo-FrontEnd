import { Component } from '@angular/core';
import {SideNavigatorBarComponent} from "../../../../public/components/side-navigator-bar/side-navigator-bar.component";
import {CommonModule} from "@angular/common";
import {PaymentMethodAddedComponent} from "../alerts/payment-method-added/payment-method-added.component";

@Component({
  selector: 'app-payment-method',
  standalone: true,
  imports: [
    SideNavigatorBarComponent, CommonModule, PaymentMethodAddedComponent
  ],
  templateUrl: './payment-method.component.html',
  styleUrl: './payment-method.component.css'
})
export class PaymentMethodComponent {
  showModal = false;

  confirmPayment() {
    this.showModal = true; // Show
  }

  closeModal() {
    this.showModal = false; // Close
  }
}
