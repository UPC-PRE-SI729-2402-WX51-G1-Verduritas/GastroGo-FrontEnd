import { Component } from '@angular/core';
import {MatCard} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {SideNavigatorBarComponent} from "../../../../public/components/side-navigator-bar/side-navigator-bar.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-cancel-order-dialog-workers',
  standalone: true,
  imports:  [
  MatCard,
  MatIcon,
  MatButton,
  SideNavigatorBarComponent,
  RouterLink
],
  templateUrl: './cancel-order-dialog-workers.component.html',
  styleUrl: './cancel-order-dialog-workers.component.css'
})
export class CancelOrderDialogWorkersComponent {

  closeDialog() {

  }
}
