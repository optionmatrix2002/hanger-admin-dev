import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Settings } from 'src/app/app.settings.model';
import { AppSettings } from 'src/app/app.settings';
import { AlertService } from 'src/app/shared/alert.service';
import { LoginService } from '../login.service';
import { emailValidator } from 'src/app/theme/utils/app-validators';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  public form: FormGroup;
  public settings: Settings;

  constructor(public appSettings: AppSettings,
    private location: Location, public fb: FormBuilder,
    public router: Router, public alertService: AlertService,
    public loginService: LoginService) {
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

  public onSubmit(values: any): void {
    if (this.form.valid) {
      this.loginService.forgetPassword(values.email).then(res => {
        if (res.success) {
          this.alertService.createAlert(res.message, 1);
          this.router.navigate(['/login']);
        } else {
          this.alertService.createAlert(res.message, 0);
        }
      });
    }
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.settings.loadingSpinner = false;
  }

}
