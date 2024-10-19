import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthBackgroundComponent} from "../../../public/components/auth-background/auth-background.component";

@Component({
  selector: 'app-sign-up-workers',
  standalone: true,
  imports: [
    AuthBackgroundComponent
  ],
  templateUrl: './sign-up-workers.component.html',
  styleUrl: './sign-up-workers.component.css'
})
export class SignUpWorkersComponent {
  constructor(private router: Router) {}


  goToPayment() {
    this.router.navigate(['payment']);
  }
}
