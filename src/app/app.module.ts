import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ManageschoolComponent } from './components/school/manageschool/manageschool.component';
import { ViewschoolComponent } from './components/school/viewschool/viewschool.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

import {AuthService} from './services/auth.service'
import {SchoolService} from './services/school.service'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ManageschoolComponent,
    ViewschoolComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    SchoolService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
