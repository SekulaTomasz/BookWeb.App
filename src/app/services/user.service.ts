import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { NewUser } from '../models/newUser';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    create(user: NewUser) {
        return this.http.post('http://bookwebapi20171127094036.azurewebsites.net/api/Account/users/create', user)
        .map((response: Response) => response.json());
    }

    // private jwt() {
    //     // create authorization header with jwt token
    //     let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //     if (currentUser && currentUser.token) {
    //         let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
    //         return new RequestOptions({ headers: headers });
    //     }
    // }
}
