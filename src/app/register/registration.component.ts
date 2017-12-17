import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { NewUser } from '../models/newUser';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AlertService } from '../services/alert.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  model: NewUser = new NewUser;
  returnUrl: string;

  constructor(private userService: UserService, private route: ActivatedRoute,
    private router: Router, private alert: AlertService) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  register() {
    this.userService.create(this.model).subscribe(data => {
      this.router.navigate([this.returnUrl]);
    },
    // tslint:disable-next-line:no-shadowed-variable
    error => {
      this.alert.error(error.text());
    });
  }

}
