import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Settings } from '../app.settings.model';
import { AppSettings } from '../app.settings';
import { AlertService } from '../shared/alert.service';
import { LoginService } from './login.service';
import { emailValidator } from '../theme/utils/app-validators';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
  selector: 'app-a-login',
  templateUrl: './login.component.html',
  providers: [CookieService]
})
export class LoginComponent implements OnInit, AfterViewInit {
  public form: FormGroup;
  public show : false;
  public settings: Settings;
  constructor(public _cookieService: CookieService, public appSettings: AppSettings,
    public fb: FormBuilder, public router: Router,
    public alertService: AlertService, public loginService: LoginService) {
    this.settings = this.appSettings.settings;
    this.form = this.fb.group({
      'email': [null, Validators.compose([Validators.required, emailValidator])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      'rememberMe': false
    });

    if (_cookieService.get('rememberMe')) {
      this.form.controls['email'].setValue(this._cookieService.get('email'));
      this.form.controls['password'].setValue(this._cookieService.get('password'));
      this.form.controls['rememberMe'].setValue(this._cookieService.get('rememberMe'));
    }
  }

  ngOnInit() {
    if (localStorage.getItem('login_user_info')) {
      var currentUser = JSON.parse(localStorage.getItem('login_user_info'));
      let token = currentUser.auth_token;
      this.loginService.checkSessionAlive(token).then(res => {
        if (res.success) {
          this.router.navigate(['/admin/dashboard']);
        }
      });
    }
  }

  public onSubmit(values: any): void {
    if (this.form.valid) {
      this.loginService.loginCheck(values.email, values.password).then(res => {
        if (res.auth) {
          this.alertService.createAlert("Login Successful", 1);
          console.log(res);
          let per_data = res;
          localStorage.setItem('login_user_info', JSON.stringify(res));
          console.log(localStorage.getItem('login_user_info'));
          this.router.navigate(['/admin/dashboard']);
        }
        else {
          this.alertService.createAlert(res.message, 0);
        }
      }).catch(e => {
        console.log(e);
      });

      if (values['rememberMe'] == true) {
        //Sending the values to cookieservice (input values => cookie service)
        this._cookieService.put('email', values['email']);
        this._cookieService.put('password', values['password']);
        this._cookieService.put('rememberMe', values['rememberMe']);
      }
      console.log(values['rememberMe']);
      console.log(this._cookieService.get('rememberMe'));
      if (values['rememberMe'] == false) {
        this._cookieService.remove('email');
        this._cookieService.remove('password');
        this._cookieService.remove('rememberMe');
      }

    }
  }

  ngAfterViewInit() {
    this.settings.loadingSpinner = false;
  }
}