import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthBackgroundComponent} from "../../../public/components/auth-background/auth-background.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-sign-up-workers',
  standalone: true,
  imports: [
    AuthBackgroundComponent,
    FormsModule
  ],
  templateUrl: './sign-up-workers.component.html',
  styleUrl: './sign-up-workers.component.css'
})
export class SignUpWorkersComponent {
  name: string = '';
  lastNames: string = '';
  telephoneNumber: string = '';
  dni: string = '';
  address: string = '';
  email: string = '';
  password: string = '';
  constructor(private router: Router) {}


  goToPlanWorker() {
    this.router.navigate(['plan-workers']);
  }
}
