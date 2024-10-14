import { Routes } from '@angular/router';
import {RolSectionComponent} from "./workers/team-activities/rol-section/rol-section.component";
import {HomeComponent} from "./public/pages/home/home.component";
import {ProfileComponent} from "./workers/profile/page/my-profile/my-profile.component";
import {OrderComponent}  from "./workers/my-order/pages/order/order.component";
import {RestaurantComponent} from "./workers/restaurant/page/restaurant/restaurant.component";
import {LogInComponent} from "./iam/pages/log-in/log-in.component";
import {SignUpComponent} from "./iam/pages/sign-up/sign-up.component";
import {AuthBackgroundComponent} from "./public/components/auth-background/auth-background.component";

export const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'profile',component: ProfileComponent},
  {path:'restaurant',component: RestaurantComponent},
  {path:'role',component: RolSectionComponent},
  {path:'order',component: OrderComponent},
  {path: 'log-in', component: LogInComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'auth', component: AuthBackgroundComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full' },
];
