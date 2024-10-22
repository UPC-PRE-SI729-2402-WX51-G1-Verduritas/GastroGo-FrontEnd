import { Routes } from '@angular/router';
import {RolSectionComponent} from "./team-activities/rol-section/rol-section.component";
import {HomeComponent} from "./public/home/pages/home/home.component";
import {ProfileComponent} from "./profile/page/my-profile/my-profile.component";
import {OrderComponent}  from "./my-order/pages/order/order.component";
import {RestaurantComponent} from "./restaurant/page/restaurant/restaurant.component";

export const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'profile',component: ProfileComponent},
  {path:'role',component: RolSectionComponent},
  {path:'order',component: OrderComponent},
  {path:'restaurant',component: RestaurantComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full' },
];
