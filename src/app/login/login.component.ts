import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { error } from 'util';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;


  constructor(private Auth: AuthService, private route: ActivatedRoute,
    private router: Router, private alert: AlertService) {
    }

  ngOnInit() {
    this.Auth.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }


    login() {
      this.Auth.authorize(this.model.username, this.model.password).subscribe(data => {
        this.router.navigate([this.returnUrl]);
      },
      // tslint:disable-next-line:no-shadowed-variable
      error => {
        this.alert.error(error);
        this.loading = false;
      });
    }
}
