import { Component } from '@angular/core';
import {MatInput, MatLabel} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {MatCard} from "@angular/material/card";
import {FormsModule} from "@angular/forms";
import {MatFormField} from "@angular/material/select";
import {Router} from "@angular/router";
import {SideNavigatorBarComponent} from "../../../../public/components/side-navigator-bar/side-navigator-bar.component";

@Component({
  selector: 'app-join-a-team',
  standalone: true,
  imports: [
    MatFormField,
    FormsModule,
    MatCard,
    MatButton,
    MatInput,
    MatLabel,
    SideNavigatorBarComponent
  ],
  templateUrl: './join-a-team.component.html',
  styleUrl: './join-a-team.component.css'
})
export class JoinATeamComponent {
  teamCode: string = '';
  constructor(private router: Router) {}

  joinTeam(path: string): void {
    this.router.navigate([path]);
  }

}
