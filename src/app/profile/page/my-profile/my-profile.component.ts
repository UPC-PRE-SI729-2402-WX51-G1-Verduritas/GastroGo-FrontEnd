import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatButtonModule, MatCheckboxModule],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.css'
})
export class ProfileComponent {

}
