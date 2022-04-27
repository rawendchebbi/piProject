import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackEndComponent } from './back-end/back-end.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListTravelComponent } from './list-travel/list-travel.component';
import {HttpClientModule} from '@angular/common/http';
import { AddTravelComponent } from './add-travel/add-travel.component'
import { FormsModule } from '@angular/forms';
//const   appRoutes: Routes = [  {path: '',component:BackEndComponent}] //,children:[]
const routes : Routes = [
  
    {path: '', component : AppComponent}, 
    {path: 'back-end', component: BackEndComponent} ,
    {path: 'home', component: HomeComponent},
    {path: 'list-travel', component: ListTravelComponent},
    {path: 'add-travel', component: AddTravelComponent},
  
  ];
@NgModule({
  declarations: [
    AppComponent,
    BackEndComponent,
    HomeComponent,
    ListTravelComponent,
    AddTravelComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes) ,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
 
})

export class AppModule { }
