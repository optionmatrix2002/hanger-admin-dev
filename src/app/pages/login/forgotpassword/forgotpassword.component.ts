import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { emailValidator } from '../../../theme/utils/app-validators';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { Location } from '@angular/common';
import { PagesService } from '../../pages.service';
import { AlertService } from '../../../shared/alert.service';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  public form:FormGroup;
  public settings: Settings;

  constructor(public appSettings:AppSettings, private location: Location ,public fb: FormBuilder, public router:Router, public alertService: AlertService, public pagesService: PagesService) {
    this.settings = this.appSettings.settings; 
    this.form = this.fb.group({
      'email': [null, Validators.compose([Validators.required, emailValidator])],
    });
   }

   goBack() {
    this.location.back();
  }

  ngOnInit() {
  }

  public onSubmit(values:any):void {
    if (this.form.valid) {
      this.pagesService.forgetPassword(values.email).then(res => {
        if (res.success) {
          this.alertService.createAlert(res.message, 1);
          this.router.navigate(['/login']);
        } else {
          this.alertService.createAlert(res.message, 0);
        }
      });
    }
  }

  ngAfterViewInit(){
    this.settings.loadingSpinner = false; 
  }

}
