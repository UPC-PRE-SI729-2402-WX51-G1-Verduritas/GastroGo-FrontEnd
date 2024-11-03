import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth-background',
  standalone: true,
  imports: [],
  templateUrl: './auth-background.component.html',
  styleUrl: './auth-background.component.css'
})
export class AuthBackgroundComponent {
  constructor(private router: Router) {}


  goToLogin() {
    this.router.navigate(['log-in']);
  }
}
