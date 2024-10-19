import { Component } from '@angular/core';
import {AuthBackgroundComponent} from "../../../public/components/auth-background/auth-background.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [
    AuthBackgroundComponent
  ],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  constructor (private router: Router) {}

  goToHome() {
    this.router.navigate(['home']);
  }
}
