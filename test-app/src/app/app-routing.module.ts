import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { DashboardComponent }   from './dashboard.component';
import { RoomsComponent }      from './rooms.component';
import { RoomDetailComponent }  from './room-detail.component';
import { RoomSearchComponent } from './room-search/room-search.component'

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'rooms/:roomID', component: RoomDetailComponent },
  { path: 'rooms',     component: RoomsComponent },
  { path: 'search/:term', component: RoomSearchComponent }
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