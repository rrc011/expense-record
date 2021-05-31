import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonBackButtonDelegate } from '@ionic/angular';
import { AuthenticationService } from 'src/app/core/services/authentication-service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.page.html',
  styleUrls: ['./verify-email.page.scss'],
})
export class VerifyEmailPage implements OnInit {
  @ViewChild(IonBackButtonDelegate, { static: false })
  backButton: IonBackButtonDelegate;

  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.setUIBackButtonAction();
  }

  setUIBackButtonAction() {
    this.backButton.onClick = () => {
      this.router.navigateByUrl('/login');
    };
  }
}
