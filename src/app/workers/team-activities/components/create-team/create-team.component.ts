import { Component } from '@angular/core';
import {MatInput, MatLabel} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {MatCard} from "@angular/material/card";
import {FormsModule} from "@angular/forms";
import {MatFormField} from "@angular/material/select";
import {Router} from "@angular/router";
import {SideNavigatorBarComponent} from "../../../../public/components/side-navigator-bar/side-navigator-bar.component";

@Component({
  selector: 'app-create-team',
  standalone: true,
  imports: [
    MatLabel,
    MatFormField,
    FormsModule,
    MatCard,
    MatButton,
    MatInput,
    SideNavigatorBarComponent
  ],
  templateUrl: './create-team.component.html',
  styleUrl: './create-team.component.css'
})
export class CreateTeamComponent {
  teamName: string = '';
  constructor(private router: Router) {}

  createTeam(path: string): void {
    this.router.navigate([path]);
  }

}
