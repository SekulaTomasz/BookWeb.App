import { Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http';
import {HttpClientModule, HttpHeaders, HttpParams, HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Headers } from '@angular/http/src/headers';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie-service';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthService {

  token = {
    'access_token': '',
    'token_type': ''
  };

  authorizationToken;

  authorize(username, password) {
    const header = new HttpHeaders().set('content-type', 'application/x-www-form-urlencoded');

    const searchParams = new URLSearchParams();
    searchParams.append('username', username); // admin
    searchParams.append('password', password); // tempP@ss123
    searchParams.append('grant_type', 'password');

    return this.http.post('http://bookwebapi20171127094036.azurewebsites.net/connect/token',
    searchParams.toString(), { headers: header })
    .map((response: Response) => {
      this.token = {
        access_token: response['access_token'],
        token_type: response['token_type']
      };
        if (this.token.access_token && this.token.token_type) {
          this.cookies.set('access_token', this.token.access_token);
          this.cookies.set('token_type', this.token.token_type);
        }
      return this.token;
    });
  }

  logout() {
    this.cookies.deleteAll();
  }

  constructor(private http: HttpClient, private cookies: CookieService) {
  }
}
