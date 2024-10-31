import { Component } from '@angular/core';
import {AuthBackgroundComponent} from "../../../public/components/auth-background/auth-background.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [
    AuthBackgroundComponent
  ],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  constructor(private router: Router) {}
  goToSignUp() {
    this.router.navigate(['sign-up']);
  }
  goToHome() {
    this.router.navigate(['home-restaurant']);
  }
  goToRecoverPassword() {
    this.router.navigate(['recover-password']);
  }
}
