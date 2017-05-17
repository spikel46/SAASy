import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { RoomDetailComponent } from './room-detail.component';
import { RoomsComponent } from './rooms.component';
import { RoomsService } from './rooms.service';
import { AppRoutingModule } from './app-routing.module';
import { ChatsService } from './chats/chats.service';
import { ChatsComponent } from './chats/chats.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomDetailComponent,
    RoomsComponent,
    ChatsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [RoomsService, ChatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }




