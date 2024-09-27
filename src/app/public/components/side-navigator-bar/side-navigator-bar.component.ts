import {Component, inject} from '@angular/core';
import {MatSidenav, MatSidenavContainer} from "@angular/material/sidenav";
import {MatIcon} from "@angular/material/icon";
import {ActivatedRoute, Router} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-side-navigator-bar',
  standalone: true,
  imports: [
    MatSidenavContainer,
    MatIcon,
    MatSidenav,
    NgOptimizedImage
  ],
  templateUrl: './side-navigator-bar.component.html',
  styleUrl: './side-navigator-bar.component.css'
})
export class SideNavigatorBarComponent {
  private router: Router = inject(Router);

  onNavigateHome() {

  }

  onNavigateRestaurants() {

  }

  onNavigateOrders() {

  }

  onNavigateTeamActivities() {

  }

  onNavigateProfile() {

  }

  onNavigateNotifications() {

  }

  onNavigateLogout() {

  }
}
