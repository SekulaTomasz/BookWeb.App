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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [AuthService,
    CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private auth: AuthService) {
    this.auth.getToken();
  }

 }
