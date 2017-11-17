import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  // News
  MatFormFieldModule,
  MatInputModule,
  MatButtonToggleModule
} from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RoutingModule } from './routing/routing.module'; 
// News
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PresentationsComponent } from './presentations/presentations.component';
import { PresentationDetailsComponent } from './presentation-details/presentation-details.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrdersComponent } from './orders/orders.component';
import { UsersComponent } from './users/users.component';
import { FilmsComponent } from './films/films.component';
import { RoomsComponent } from './rooms/rooms.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginComponent,
    RegisterComponent,
    PresentationsComponent,
    PresentationDetailsComponent,
    MyProfileComponent,
    MyOrdersComponent,
    OrdersComponent,
    UsersComponent,
    FilmsComponent,
    RoomsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,

    // news
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule, 
    //

    FlexLayoutModule,
    RoutingModule,
    // News
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
