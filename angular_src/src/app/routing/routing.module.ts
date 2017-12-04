import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }   from '@angular/router';

import { AppComponent } from '../app.component';
import { MainPageComponent } from '../main-page/main-page.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { PresentationsComponent } from '../presentations/presentations.component';
import { PresentationDetailsComponent } from '../presentation-details/presentation-details.component';
import { FilmsComponent } from '../films/films.component';
import { MyOrdersComponent } from '../my-orders/my-orders.component';
import { MyProfileComponent } from '../my-profile/my-profile.component';
import { OrdersComponent } from '../orders/orders.component';
import { RoomsComponent } from '../rooms/rooms.component';
import { UsersComponent } from '../users/users.component';
import { AdPresentationsComponent } from '../ad-presentations/ad-presentations.component';

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
    component: AdPresentationsComponent
  },

  {
    path: 'films',
    component: FilmsComponent
  },

  {
    path: 'myorders',
    component: MyOrdersComponent
  },

  {
    path: 'myprofile',
    component: MyProfileComponent
  },

  {
    path: 'orders',
    component: OrdersComponent
  },

  {
    path: 'rooms',
    component: RoomsComponent
  },

  {
    path: 'users',
    component: UsersComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }