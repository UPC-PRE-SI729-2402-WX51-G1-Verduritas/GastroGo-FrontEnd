import { Component } from '@angular/core';
import {AuthBackgroundComponent} from "../../../public/components/auth-background/auth-background.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    AuthBackgroundComponent
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  constructor(private router: Router) {}
  goToSignUpWorkers() {
    this.router.navigate(['sign-up-workers']);
  }
  goToSignUpRestaurants() {
    this.router.navigate(['sign-up-restaurant']);
  }

}
