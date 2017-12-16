import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }   from '@angular/router';

import { AppComponent } from '../app.component';
import { MainPageComponent } from '../main-page/main-page.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { PresentationsComponent } from '../presentations/presentations.component';
import { PresentationDetailsComponent } from '../presentation-details/presentation-details.component';
import { AdMoviesComponent } from '../components/ad-movies/ad-movies.component';
import { MyOrdersComponent } from '../my-orders/my-orders.component';
import { MyProfileComponent } from '../my-profile/my-profile.component';
import { AdOrdersComponent } from '../components/ad-orders/ad-orders.component';
import { AdRoomsComponent } from '../components/ad-rooms/ad-rooms.component';
import { AdUsersComponent } from '../components/ad-users/ad-users.component';
import { AdPresentationsComponent } from '../components/ad-presentations/ad-presentations.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: MainPageComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'register',
    component: RegisterComponent
  },

  {
    path: 'presentations',
    component: PresentationsComponent
  },

  {
    path: 'ad-presentations',
    component: AdPresentationsComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ADMIN']}
  },

  {
    path: 'movies',
    component: AdMoviesComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ADMIN']}
  },

  {
    path: 'myorders',
    component: MyOrdersComponent,
    canActivate: [AuthGuard],
    data: {roles: ['USER']}
  },

  {
    path: 'myprofile',
    component: MyProfileComponent,
    canActivate: [AuthGuard],
    data: {roles: ['USER']}
  },

  {
    path: 'orders',
    component: AdOrdersComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ADMIN']}
  },

  {
    path: 'rooms',
    component: AdRoomsComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ADMIN']}
  },

  {
    path: 'users',
    component: AdUsersComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ADMIN']}
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }