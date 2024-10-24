import { Component } from '@angular/core';
import {MatFormField} from "@angular/material/select";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {MatCheckbox} from "@angular/material/checkbox";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    MatCheckbox,
    FormsModule,
    MatButton,
    MatInput,
    MatFormField
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  name: string = '';
  lastNames: string = '';
  restaurantName: string = '';
  telephoneNumber: string = '';
  address: string = '';
  email: string = '';
  password: string = '';
  dni: string = '';
  ruc: string = '';
  monthlyPayment: boolean = false;
  annualPayment: boolean = false;

}
