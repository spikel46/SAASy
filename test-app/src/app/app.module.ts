import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { RoomsComponent } from './rooms.component';
import { RoomsService } from './rooms.service';
import { AppRoutingModule } from './app-routing.module';
import { ChatsService } from './chats.service';
import { ChatsComponent } from './chats/chats.component';
import { HomeComponent } from './home/home.component';
import { RoomSearchComponent } from './room-search/room-search.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersService } from './users.service';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomDetailComponent,
    RoomsComponent,
    ChatsComponent,
    HomeComponent,
    RoomSearchComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [RoomsService, ChatsService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }




