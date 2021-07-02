import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DetailJoueurComponent } from './detail-joueur/detail-joueur.component';
import { AddJoueurComponent } from './add-joueur/add-joueur.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DetailJoueurComponent,
    AddJoueurComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
