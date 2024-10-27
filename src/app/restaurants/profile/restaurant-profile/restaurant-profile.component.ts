import { Component } from '@angular/core';
import {MatFormField} from "@angular/material/select";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {MatCheckbox} from "@angular/material/checkbox";
import {SideNavigatorBarComponent} from "../../../public/components/side-navigator-bar/side-navigator-bar.component";

@Component({
  selector: 'app-restaurant-profile',
  standalone: true,
  imports: [
    MatCheckbox,
    FormsModule,
    MatButton,
    MatInput,
    MatFormField,
    SideNavigatorBarComponent
  ],
  templateUrl: './restaurant-profile.component.html',
  styleUrl: './restaurant-profile.component.css'
})
export class RestaurantProfileComponent {
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
