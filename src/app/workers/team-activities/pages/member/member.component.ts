import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";
import {MatCard} from "@angular/material/card";
import {MatFormField, MatOption, MatSelect} from "@angular/material/select";
import {SideNavigatorBarComponent} from "../../../../public/components/side-navigator-bar/side-navigator-bar.component";
import {MatCheckbox} from "@angular/material/checkbox";

@Component({
  selector: 'app-member',
  standalone: true,
  imports: [
    MatFormField,
    MatOption,
    MatSelect,
    MatCard,
    MatIcon,
    MatIconButton,
    MatInput,
    MatButton,
    FormsModule,
    SideNavigatorBarComponent,
    MatCheckbox
  ],
  templateUrl: './member.component.html',
  styleUrl: './member.component.css'
})
export class MemberComponent {
  teamCode: string = '';
  votingCode: string = '';
  selectedRating: string | null = null;

  voteOchi: boolean = false;
  votePalmVine: boolean = false;

  joinTeam() {
    console.log('Joining team');
    localStorage.setItem('teamCode', this.teamCode);
  }

  joinVoting() {
    console.log('Joining voting');
    localStorage.setItem('votingCode', this.votingCode);
  }

  vote(option: number) {
    console.log(`Voted for option ${option}`);

  }

}
