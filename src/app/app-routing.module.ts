import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoomComponent } from './room/room.component';
import { RoomtypeDetailComponent } from './roomtype-detail/roomtype-detail.component';
import { SignupComponent } from './signup/signup.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RoomtypeComponent } from './roomtype/roomtype.component';
import { FoodComponent } from './food/food.component';
import { AdminComponent } from './admin/admin.component';
import { ReserveComponent } from './reserve/reserve.component';
import { ReserveDetailComponent } from './reserve-detail/reserve-detail.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';
const routes: Routes = [
  {
    path:'', component:HomeComponent
  },
  {
    path:'admin', component:AdminComponent
  },
  {
    path:'home', component:HomeComponent
  },
  {
    path:'room', component:RoomComponent
  },
  {
    path:'reserve', component:ReserveComponent
  },
  {
    path:'reserve-detail', component:ReserveDetailComponent
  },
  {
    path:'contact', component:ContactComponent
  },
  {
    path:'login', component:LoginComponent
  },
  
  {
    path:'signup', component:SignupComponent
  },
  {
    path:'roomtype', component:RoomtypeComponent

  },
  {
    path:'roomtype-detail', component:RoomtypeDetailComponent

  },
  {
    path:'food', component:FoodComponent
  },
  {
    path:'food-detail', component:FoodDetailComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
