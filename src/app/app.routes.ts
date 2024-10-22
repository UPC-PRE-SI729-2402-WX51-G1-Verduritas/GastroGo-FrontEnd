import { Routes } from '@angular/router';
import {ProfileComponent} from "./profile/page/my-profile/my-profile.component";

export const routes: Routes = [
  {path:'profile',component: ProfileComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full' },
];
