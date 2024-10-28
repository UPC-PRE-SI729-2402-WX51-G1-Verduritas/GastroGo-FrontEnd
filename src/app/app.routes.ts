import { Routes } from '@angular/router';
import {RolSectionComponent} from "./workers/team-activities/pages/rol-section/rol-section.component";
import {HomeComponent} from "./public/pages/home/home.component";
import {ProfileComponent} from "./workers/profile/page/my-profile/my-profile.component";
import {OrderComponent}  from "./workers/my-order/pages/order/order.component";
import {RestaurantComponent} from "./workers/restaurant/page/restaurant/restaurant.component";
import {LogInComponent} from "./iam/pages/log-in/log-in.component";
import {SignUpComponent} from "./iam/pages/sign-up/sign-up.component";
import {AuthBackgroundComponent} from "./public/components/auth-background/auth-background.component";
import {PaymentComponent} from "./iam/components/payment/payment.component";
import {PlanRestaurantComponent} from "./iam/components/plan-restaurant/plan-restaurant.component";
import {PlanWorkersComponent} from "./iam/components/plan-workers/plan-workers.component";
import {RecoverPasswordComponent} from "./iam/components/recover-password/recover-password.component";
import {SignUpRestaurantComponent} from "./iam/components/sign-up-restaurant/sign-up-restaurant.component";
import {SignUpWorkersComponent} from "./iam/components/sign-up-workers/sign-up-workers.component";
import {SuccessfulRecoverPasswordComponent} from "./iam/components/successful-recover-password/successful-recover-password.component";
import {OrderDetailsComponent} from "./workers/my-order/pages/order-details/order-details.component";
import {
  OrderDetailsRestaurantComponent
} from "./restaurants/my-order/pages/order-details-restaurant/order-details-restaurant.component";
import {JoinATeamComponent} from "./workers/team-activities/components/join-a-team/join-a-team.component";
import {CreateTeamComponent} from "./workers/team-activities/components/create-team/create-team.component";
import {LeaderComponent} from "./workers/team-activities/pages/leader/leader.component";
import {MemberComponent} from "./workers/team-activities/pages/member/member.component";
import {MenuComponent} from "./restaurants/menu/pages/menu/menu/menu.component";
import {RestaurantProfileComponent} from "./restaurants/profile/restaurant-profile/restaurant-profile.component";
import {OrderRestaurantComponent} from "./restaurants/my-order/pages/order/order-restaurant.component";
import { CancelOrderDialogRestaurantComponent} from "./restaurants/my-order/pages/cancel-order-dialog-restaurant/cancel-order-dialog-restaurant.component";
import {OrderTrackerComponent} from "./workers/my-order/pages/order-tracker/order-tracker.component";
import {CancelOrderDialogWorkersComponent} from "./workers/my-order/pages/cancel-order-dialog-workers/cancel-order-dialog-workers.component";
import {DetailRestaurantComponent} from "./workers/restaurant/page/detail-restaurant/detail-restaurant.component";
import {PaymentMethodComponent} from "./workers/profile/page/payment-method/payment-method.component";
export const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'profile',component: ProfileComponent},
  {path:'restaurant',component: RestaurantComponent},
  {path:'role',component: RolSectionComponent},
  {path: 'join-a-team', component: JoinATeamComponent },
  {path: 'create-team', component: CreateTeamComponent },
  {path: 'leader', component: LeaderComponent},
  {path: 'member', component: MemberComponent},
  {path:'order',component: OrderComponent},
  { path:'order-details',component: OrderDetailsComponent},
  {path: 'log-in', component: LogInComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'auth', component: AuthBackgroundComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'plan-restaurant', component: PlanRestaurantComponent},
  {path: 'plan-workers', component: PlanWorkersComponent},
  {path: 'recover-password', component: RecoverPasswordComponent},
  {path: 'sign-up-restaurant', component: SignUpRestaurantComponent},
  {path: 'sign-up-workers', component: SignUpWorkersComponent},
  {path: 'successful-recover-password', component: SuccessfulRecoverPasswordComponent},
  {path: 'menu', component: MenuComponent},
  {path:'order-details-restaurant',component: OrderDetailsRestaurantComponent},
  {path:'restaurant-profile', component:RestaurantProfileComponent},
  {path:'order-restaurant',component: OrderRestaurantComponent},
  {path:'cancel-order-dialog',component: CancelOrderDialogRestaurantComponent},
  {path:'order-tracker',component: OrderTrackerComponent},
  {path:'cancel-order-dialog-workers',component: CancelOrderDialogWorkersComponent},
  {path: 'detail-restaurant', component: DetailRestaurantComponent},
  {path: 'payment-method', component: PaymentMethodComponent},

  {path: '', redirectTo: 'log-in', pathMatch: 'full' },
];
