import { Component } from '@angular/core';
import {AuthBackgroundComponent} from "../../../public/components/auth-background/auth-background.component";

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
  private router: any;
  goToSignUp() {
    this.router.navigate(['/sign-up']);
  }
}
