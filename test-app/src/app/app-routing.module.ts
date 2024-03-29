import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoomsComponent }      from './rooms.component';
import { RoomDetailComponent }  from './room-detail/room-detail.component';
import { RoomSearchComponent } from './room-search/room-search.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'rooms/:roomID', component: RoomDetailComponent },
  { path: 'rooms',     component: RoomsComponent },
  { path: 'search/:term', component: RoomSearchComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
