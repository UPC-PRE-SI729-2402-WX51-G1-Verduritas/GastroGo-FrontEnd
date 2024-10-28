import {Component, inject} from '@angular/core';
import {MatSidenav, MatSidenavContainer} from "@angular/material/sidenav";
import {MatIcon} from "@angular/material/icon";
import {ActivatedRoute, Router} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-side-navigator-bar-restaurants',
  standalone: true,
  imports: [
    MatSidenavContainer,
    MatIcon,
    MatSidenav,
    NgOptimizedImage
  ],
  templateUrl: './side-navigator-bar-restaurant.component.html',
  styleUrl: './side-navigator-bar-restaurant.component.css'
})
export class SideNavigatorBarRestaurantComponent {
  private router: Router = inject(Router);

  onNavigateHome() {
    this.router.navigate(['home-restaurant']).then();
  }



  onNavigateOrders() {
    this.router.navigate(['order-restaurant']).then();

  }


  onNavigateProfile() {
    this.router.navigate(['restaurant-profile']).then();

  }

  onNavigateNotifications() {

  }

  onNavigateLogout() {

  }
}
