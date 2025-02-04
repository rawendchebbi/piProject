import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BackEndComponent } from './back-end/back-end.component';

import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path: '', component : AppComponent}, 
  {path: 'back-end', component: BackEndComponent} ,
  {path: 'home', component: HomeComponent},];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
