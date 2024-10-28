import {Component, EventEmitter, Output} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-payment-method-added',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment-method-added.component.html',
  styleUrl: './payment-method-added.component.css'
})
export class PaymentMethodAddedComponent {
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}
