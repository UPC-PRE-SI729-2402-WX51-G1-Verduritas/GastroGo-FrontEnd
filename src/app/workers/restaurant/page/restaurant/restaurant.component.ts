import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatCard} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {SideNavigatorBarComponent} from "../../../../public/components/side-navigator-bar/side-navigator-bar.component";

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
    MatSelectModule,
    MatCard,
    MatIcon,
    SideNavigatorBarComponent
  ],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent {
  searchQuery: string = '';
  filteredOptions: string[] = [];
  options: string[] = ['Ochi', 'Palm & Vine', 'Jolly Burger', 'Spicy Villa'];

  foodOptions: string[] = ['junk food', 'pizzas', 'grills', 'oriental food', 'barbecues'];
  selectedFood: string = '';

  ratingOptions: string[] = ['⭐', '⭐⭐', '⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐'];
  selectedRating: string = '';

  filterOptions() {
    const query = this.searchQuery.toLowerCase();
    this.filteredOptions = this.options.filter(option => option.toLowerCase().includes(query));
  }

  selectOption(option: string) {
    this.searchQuery = option;
    this.filteredOptions = [];
  }

  search() {
    // Implement your search logic here
    console.log('Search for:', this.searchQuery, this.selectedFood, this.selectedRating);
  }
}
