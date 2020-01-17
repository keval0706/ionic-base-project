import { Component, OnInit } from '@angular/core';
import { LoginDto } from '../account.model';
import { Router } from '@angular/router';
import { TosterService } from 'src/app/shared/services/toster.service';
import { LoadingController } from '@ionic/angular';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  login: LoginDto;

  constructor(
    private router: Router,
    private tosterService: TosterService,
    private sharedService: SharedService,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.login = new LoginDto();
  }

  async submit() {
    console.log(this.login);
    if (this.login.email === 'admin@localhost.com' && this.login.password === 'admin') {
      this.sharedService.setUserName('Admin');
      this.presentLoading();
      this.router.navigateByUrl('/shop/home');
    } else if (this.login.email === 'user@localhost.com' && this.login.password === 'user') {
      this.sharedService.setUserName('User');
      this.presentLoading();
      this.router.navigateByUrl('/shop/home');
    } else {
      this.tosterService.dangerToster('Failed to login');
    }
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait',
      duration: 2000
    });
    await loading.present();

    console.log('Loading dismissed!');
  }

}
