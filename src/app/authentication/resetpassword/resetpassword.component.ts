import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Settings } from 'src/app/app.settings.model';
import { AppSettings } from 'src/app/app.settings';
import { AlertService } from 'src/app/shared/alert.service';
import { MustMatch } from 'src/app/shared/must-match.validator';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  public form: FormGroup;
  public settings: Settings;
  today = Date.now();
  userId: string;
  resToken: string;
  timeStamp: string;
  isOneLetter = false;
  isOneCapitalLetter = false;
  isOneNumber = false;
  isOneSpecialCaharacter = false;
  isMinLength = false;
  isValidate = false;
  private _submitted: boolean = false;

  constructor(public appSettings: AppSettings,
    private activatedRoute: ActivatedRoute,
    public fb: FormBuilder, public router: Router,
    public alertService: AlertService, public loginService: LoginService) {
    this.createForm();
    this.activatedRoute.queryParams.subscribe(params => {
      this.userId = params.uid;
      this.resToken = params.resetToken;
      this.timeStamp = params.tC;
    });
    this.settings = this.appSettings.settings;
  }


  get password() { return this.form.get('password'); };
  get confirmPassword() { return this.form.get('confirmPassword'); };

  createForm() {
    this.form = this.fb.group({
      password: new FormControl('', [Validators.minLength(8), Validators.required]),
      confirmPassword: new FormControl('', [Validators.minLength(8), Validators.required])
    });
  }

  onKeyPress(e) {
    var pswd = e.value;
    //validate the length
    if (pswd.length < 8) {
      this.isMinLength = false;
    } else {
      this.isMinLength = true;
    }
  }


  ngOnInit() {
    this.loginService.urlResetPasswordCheck(this.userId, this.resToken, this.timeStamp).then(res => {
      if (!res.success) {
        this.alertService.createAlert(res.message, 0);
        this.router.navigate(['/login']);
      } else {
      }
    });
  }

  public onSubmit(values: any): void {
    if (this.form.valid) {
      if (values['password'] === values['confirmPassword']) {
        this.loginService.resetPassword(values.password, this.userId, this.resToken).then(res => {
          if (res.success) {
            this.alertService.createAlert('Password has been sucessfully reset. Please login again', 1);
            this.router.navigate(['/login']);
          } else {
            this.alertService.createAlert(res.message, 0);
          }
        });
      } else {
        this.alertService.createAlert('Password and confirm password not matched.', 0);
      }
    }
  }

}
