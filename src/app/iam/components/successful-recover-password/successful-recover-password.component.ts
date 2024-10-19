import { Component } from '@angular/core';
import {AuthBackgroundComponent} from "../../../public/components/auth-background/auth-background.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-successful-recover-password',
  standalone: true,
  imports: [
    AuthBackgroundComponent
  ],
  templateUrl: './successful-recover-password.component.html',
  styleUrl: './successful-recover-password.component.css'
})
export class SuccessfulRecoverPasswordComponent {
  constructor(private router: Router) {}


  goToLogIn() {
    this.router.navigate(['log-in']);
  }
}
