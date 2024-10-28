import { Component } from '@angular/core';
import {SideNavigatorBarComponent} from "../../../../public/components/side-navigator-bar/side-navigator-bar.component";

@Component({
  selector: 'app-payment-method',
  standalone: true,
  imports: [
    SideNavigatorBarComponent
  ],
  templateUrl: './payment-method.component.html',
  styleUrl: './payment-method.component.css'
})
export class PaymentMethodComponent {

}
