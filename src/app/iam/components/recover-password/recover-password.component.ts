import { Component } from '@angular/core';
import {AuthBackgroundComponent} from "../../../public/components/auth-background/auth-background.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recover-password',
  standalone: true,
  imports: [
    AuthBackgroundComponent
  ],
  templateUrl: './recover-password.component.html',
  styleUrl: './recover-password.component.css'
})
export class RecoverPasswordComponent {
  constructor(private router: Router) {}


  goToSuccessfulPassword() {
    this.router.navigate(['successful-recover-password']);
  }
}
