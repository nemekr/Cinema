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
  MatButtonToggleModule,
  MatChipsModule,
  MatCardModule,
  MatSelectModule
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
import { AdOrdersComponent } from './components/ad-orders/ad-orders.component';
import { AdUsersComponent } from './components/ad-users/ad-users.component';
import { AdMoviesComponent } from './components/ad-movies/ad-movies.component';
import { AdRoomsComponent } from './components/ad-rooms/ad-rooms.component';
import { PresentationService } from './services/presentation.service';
import { MovieService } from './services/movie.service';
import { AdMovieFormComponent } from './components/ad-movie-form/ad-movie-form.component';
import { CinemaRoomService } from './services/cinema-room.service';
import { AdRoomFormComponent } from './components/ad-room-form/ad-room-form.component';
import { OrderService } from './services/order.service';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AdPresentationsComponent } from './components/ad-presentations/ad-presentations.component';
import { AdPresentationFormComponent } from './components/ad-presentation-form/ad-presentation-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { MenuComponent } from './menu/menu.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { AuthGuard } from './auth.guard';


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
    AdOrdersComponent,
    AdUsersComponent,
    AdMoviesComponent,
    AdRoomsComponent,
    AdMovieFormComponent,
    AdRoomFormComponent,
    AdPresentationsComponent,
    AdPresentationFormComponent,
    RegistrationFormComponent,
    MenuComponent,
    ProfileFormComponent,
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
    MatChipsModule,
    MatCardModule,
    MatSelectModule,
    HttpClientModule,
    //

    FlexLayoutModule,
    RoutingModule,
    // News
    FormsModule
  ],
  providers: [PresentationService, MovieService, CinemaRoomService, OrderService, UserService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
