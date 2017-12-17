import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HttpClientModule, HttpHeaders, HttpParams} from '@angular/common/http';
import { Http } from '@angular/http/src/http';



import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { AuthGuard } from './_guards/auth.guard';
import { AlertService } from './services/alert.service';
import { AlertComponent } from './alert/alert.component';
import { RegistrationComponent } from './register/registration.component';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AlertComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [
    AuthService,
    CookieService,
    AuthGuard,
    AlertService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}

 }
