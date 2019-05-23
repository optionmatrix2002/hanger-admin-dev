import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { AlertService } from '../../../shared/alert.service';
import { MustMatch } from '../../../shared/must-match.validator';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  public form:FormGroup;
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

  constructor(public appSettings:AppSettings,private activatedRoute: ActivatedRoute, public fb: FormBuilder, public router:Router, public alertService: AlertService) { 
    this.createForm();
    this.settings = this.appSettings.settings; 
  }


  get password() { return this.form.get('password'); };
  get confirmPassword() { return this.form.get('confirmPassword'); };

  createForm() {
    this.form = this.fb.group({
      password: new FormControl('', [Validators.minLength(8), Validators.required]),
      confirmPassword: new FormControl('', [Validators.minLength(8), Validators.required])
    },{
      validator: MustMatch('password','confirmPassword')
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
  }

  public onSubmit(values:any):void {
    console.log(values['password']);
    console.log(values['confirmPassword']);
    // if (this.form.valid) {
    //   if(values['password'] === values['confirmPassword']) {
    //     this.loginService.resetPassword(values.password, this.userId, this.resToken).then(res => {
    //       if (res.success) {
    //         this.alertService.createAlert('Password has been sucessfully reset. Please login again', 1);
    //         this.router.navigate(['/login']);
    //       } else {
    //         this.alertService.createAlert(res.message, 0);
    //       }
    //     });
    //   } else {
    //     console.log("error");
    //   }
    // }
  }

}
