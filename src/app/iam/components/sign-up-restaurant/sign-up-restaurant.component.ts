import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthBackgroundComponent} from "../../../public/components/auth-background/auth-background.component";

@Component({
  selector: 'app-sign-up-restaurant',
  standalone: true,
  imports: [
    AuthBackgroundComponent
  ],
  templateUrl: './sign-up-restaurant.component.html',
  styleUrl: './sign-up-restaurant.component.css'
})
export class SignUpRestaurantComponent {
  constructor(private router: Router) {}


  goToPayment() {
    this.router.navigate(['payment']);
  }

}
