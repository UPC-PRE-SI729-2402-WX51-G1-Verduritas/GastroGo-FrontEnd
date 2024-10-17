import { Component } from '@angular/core';
import {AuthBackgroundComponent} from "../../../public/components/auth-background/auth-background.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-plan-restaurant',
  standalone: true,
  imports: [
    AuthBackgroundComponent
  ],
  templateUrl: './plan-restaurant.component.html',
  styleUrl: './plan-restaurant.component.css'
})
export class PlanRestaurantComponent {
  constructor(private router: Router) {}

  goToPayment() {
    this.router.navigate(['payment']);
  }
}
