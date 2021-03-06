import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RoomComponent } from './room/room.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RoomtypeComponent } from './roomtype/roomtype.component';
import { FoodComponent } from './food/food.component';
import { HttpClientModule } from '@angular/common/http';
import { ReserveComponent } from './reserve/reserve.component';
import { ApiService } from './shared/api.service';
import { ReserveDetailComponent } from './reserve-detail/reserve-detail.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RoomtypeDetailComponent } from './roomtype-detail/roomtype-detail.component';
import { AdminComponent } from './admin/admin.component';

import { ReservationService } from './admin/reservation.service';
import { DrinkComponent } from './drink/drink.component';
import { DrinkDetailComponent } from './drink-detail/drink-detail.component';
import { FoodServicesComponent } from './food-services/food-services.component';
import { RoomServiceComponent } from './room-service/room-service.component';
import { FoodViewComponent } from './food-view/food-view.component';
import { RoomViewComponent } from './room-view/room-view.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoomComponent,
    ContactComponent,
    LoginComponent,
    RoomtypeComponent,
    FoodComponent,
    ReserveComponent,
    ReserveDetailComponent,
    FooterComponent,
    SignupComponent,
    FoodDetailComponent,
    
    RoomtypeDetailComponent,
    AdminComponent,
    DrinkComponent,
    DrinkDetailComponent,
    FoodServicesComponent,
    RoomServiceComponent,
    FoodViewComponent,
    RoomViewComponent
   
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    HttpClientModule,
 
   
  ],
  providers: [ApiService , ReservationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
