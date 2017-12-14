import { Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http';
import {HttpClientModule, HttpHeaders, HttpParams, HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Headers } from '@angular/http/src/headers';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthService {

  token = {
    'access_token': '',
    'token_type': '',
    'expires_in': ''
  };

  authorizationToken;

  async getToken() {
    if (!this.cookies.check('access_token') && !this.cookies.check('token_type')) {
      if (this.cookies.get('access_token') !== '' && this.cookies.get('token_type') !== '') {
        this.setAuthorizationToken();
        this.getOrder(this.authorizationToken);
      }
    }
    await this.authorize();
  }

  async authorize() {
    const header = new HttpHeaders().set('content-type', 'application/x-www-form-urlencoded');

    const searchParams = new URLSearchParams();
    searchParams.append('username', 'admin');
    searchParams.append('password', 'tempP@ss123');
    searchParams.append('grant_type', 'password');

    return await this.http.post('http://bookwebapi20171127094036.azurewebsites.net/connect/token',
    searchParams.toString(), { headers: header })
    .subscribe(response => {

      this.cookies.set('access_token', response['access_token']);
      this.cookies.set('token_type', response['token_type']);
    });
  }

  async getOrder(authorizationToken) {
    const header = new HttpHeaders().set('Authorization', authorizationToken);
    this.http.get('http://bookwebapi20171127094036.azurewebsites.net/api/Account/users/me', {headers: header})
    .subscribe(res => console.log(res));
  }
  setAuthorizationToken(): string {
    this.authorizationToken = this.cookies.get('token_type') + ' ' + this.cookies.get('access_token');

   return this.authorizationToken;
  }

  constructor(private http: HttpClient, private cookies: CookieService) {
  }

}
