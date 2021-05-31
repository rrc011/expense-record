import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/core/services/alert.service';
import { AuthenticationService } from 'src/app/core/services/authentication-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    public authService: AuthenticationService,
    public router: Router,
    private _alertService: AlertService
  ) {}

  ngOnInit() {}

  logIn(form: NgForm) {
    console.log(form.form);
    const data = form.form;
    if (data.invalid) {
      this._alertService.error('Form invalid');
      return;
    }
    this.authService
      .SignIn(data.controls['email'].value, data.controls['password'].value)
      .then((res) => {
        if (this.authService.isEmailVerified) {
          this.router.navigate(['home']);
        } else {
          this._alertService.error('Email is not verified');
          return false;
        }
      })
      .catch((error) => {
        this._alertService.error(error.message);
      });
  }
}
