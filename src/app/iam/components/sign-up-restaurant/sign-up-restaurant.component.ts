import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthBackgroundComponent} from "../../../public/components/auth-background/auth-background.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-sign-up-restaurant',
  standalone: true,
  imports: [
    AuthBackgroundComponent,
    FormsModule
  ],
  templateUrl: './sign-up-restaurant.component.html',
  styleUrl: './sign-up-restaurant.component.css'
})
export class SignUpRestaurantComponent {
  name: string = '';
  lastNames: string = '';
  telephoneNumber: string = '';
  dni: string = '';
  address: string = '';
  email: string = '';
  password: string = '';
  restaurantName: string = '';
  ruc: string = '';
  constructor(private router: Router) {}


  goToPlanRestaurant() {
    this.router.navigate(['plan-restaurant']);
  }

}
