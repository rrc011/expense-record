import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user.model';
import { AlertService } from 'src/app/core/services/alert.service';
import { AuthenticationService } from 'src/app/core/services/authentication-service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  constructor(
    public authService: AuthenticationService,
    public router: Router,
    private _alertService: AlertService
  ) {}

  ngOnInit() {}

  signUp(form: NgForm) {
    const data = form.form;

    if (data.invalid) {
      if (data.controls['password'].value !== data.controls['confirm'].value)
        this._alertService.error('passwords are not same');
      else this._alertService.error('Form invalid');
      return;
    }

    this.authService
      .RegisterUser(
        data.controls['email'].value,
        data.controls['password'].value
      )
      .then((res) => {
        // Do something here
        this.authService.SendVerificationMail();
        this.router.navigate(['verify-email']);
      })
      .catch((error) => {
        this._alertService.error(error.message);
      });
  }
}
