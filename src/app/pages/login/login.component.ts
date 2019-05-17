import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { emailValidator } from '../../theme/utils/app-validators';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { PagesService } from '../pages.service';
import { AlertService } from '../../shared/alert.service';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  public form:FormGroup;
  public settings: Settings;
  constructor(public appSettings:AppSettings, public fb: FormBuilder, public router:Router,public alertService:AlertService,public pagesService: PagesService){
    this.settings = this.appSettings.settings; 
    this.form = this.fb.group({
      'email': [null, Validators.compose([Validators.required, emailValidator])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])] 
    });
  }

  ngOnInit() {
    if (localStorage.getItem('login_user_info')) {
      var currentUser = JSON.parse(localStorage.getItem('login_user_info'));
      console.log(currentUser);
      let token = currentUser.auth_token;
      console.log(token);
      this.pagesService.checkSessionAlive(token).then(res => {
        if (res.success) {
          this.router.navigate(['/dashboard']);
        }
      });
    }
  }

  public onSubmit(values:any):void {
    if (this.form.valid) {
      this.pagesService.loginCheck(values.email, values.password).then(res => {
        if(res.auth) {
          this.alertService.createAlert("Login Successful",1);
          console.log(res);
          let per_data = res;
          localStorage.setItem('login_user_info', JSON.stringify(res));
          console.log(localStorage.getItem('login_user_info'));
          this.router.navigate(['/dashboard']);
        }
        else {
          this.alertService.createAlert(res.message,0);
        }
      }).catch(e => {
        console.log(e);
      });
    }
  }

  ngAfterViewInit(){
    this.settings.loadingSpinner = false; 
  }
}