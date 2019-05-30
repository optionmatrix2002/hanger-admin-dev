import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Settings } from 'src/app/app.settings.model';
import { AppSettings } from 'src/app/app.settings';
import { AlertService } from 'src/app/shared/alert.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-verifyotp',
  templateUrl: './verifyotp.component.html',
  styleUrls: ['./verifyotp.component.scss']
})
export class VerifyOTPComponent implements OnInit {

  public form: FormGroup;
  public settings: Settings;
  public user_id : any;

  constructor(public appSettings: AppSettings,
    private activatedRoute: ActivatedRoute,
    private location: Location, public fb: FormBuilder,
    public router: Router, public alertService: AlertService,
    public loginService: LoginService) {
    this.settings = this.appSettings.settings;
    this.form = this.fb.group({
      'otp': [null, Validators.compose([Validators.required])],
    });

    this.activatedRoute.queryParams.subscribe(params => {
      this.user_id = params.user_id;
      if(!this.user_id) {
        this.router.navigate(['/login']);
      }
    });

  }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
  }

  public onSubmit(values: any): void {
    if (this.form.valid) {
      this.loginService.validateOTP(this.user_id, values.otp).then(res => {
        if (res.success) {
          this.alertService.createAlert('Verification code has been validated. Please set your password', 1);
          this.router.navigate(['/resetpassword'], { queryParams: { user_id: this.user_id } });
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
