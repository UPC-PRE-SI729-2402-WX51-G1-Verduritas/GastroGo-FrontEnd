import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import {FormsModule} from "@angular/forms";
import {MatIcon} from "@angular/material/icon";
import {MatFormField, MatOption, MatSelect} from "@angular/material/select";

@Component({
  selector: 'app-leader',
  standalone: true,
  imports: [
    MatOption,
    MatCardContent,
    MatFormField,
    MatSelect,
    MatCard,
    MatIcon,
    FormsModule,
    MatButton,
    MatCardHeader,
    MatIconButton,
    NgForOf
  ],
  templateUrl: './leader.component.html',
  styleUrl: './leader.component.css'
})
export class LeaderComponent {
  restaurants = [
    { id: 1, name: 'Ochi', votes: 24 },
    { id: 2, name: 'Palm & Vine', votes: 1 },
    { id: 3, name: 'La Mar', votes: 0 }
  ];

  selectedRestaurant1: string | null = null;
  selectedRestaurant2: string | null = null;

  faCheck() {
    return 'check';
  }

}
