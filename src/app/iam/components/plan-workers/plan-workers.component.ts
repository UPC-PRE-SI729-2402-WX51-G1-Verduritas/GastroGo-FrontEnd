import { Component } from '@angular/core';
import {AuthBackgroundComponent} from "../../../public/components/auth-background/auth-background.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-plan-workers',
  standalone: true,
  imports: [
    AuthBackgroundComponent
  ],
  templateUrl: './plan-workers.component.html',
  styleUrl: './plan-workers.component.css'
})
export class PlanWorkersComponent {
  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['home']);
  }
  goToPayment() {
    this.router.navigate(['payment']);
  }
}
