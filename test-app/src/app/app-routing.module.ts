import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { DashboardComponent }   from './dashboard.component';
import { RoomsComponent }      from './rooms.component';
import { RoomDetailComponent }  from './room-detail.component';
import { RoomSearchComponent } from './room-search/room-search.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'rooms/:roomID', component: RoomDetailComponent },
  { path: 'rooms',     component: RoomsComponent },
  { path: 'search/:term', component: RoomSearchComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }

/*
{ path: '', redirectTo: '/rooms', pathMatch: 'full' },
{ path: 'dashboard',  component: DashboardComponent },
*/