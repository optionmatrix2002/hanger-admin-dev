import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { emailValidator } from '../../../theme/utils/app-validators';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { Location } from '@angular/common';
import { PagesService } from '../../pages.service';
import { AlertService } from '../../../shared/alert.service';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-verifyuser',
  templateUrl: './verifyuser.component.html',
  styleUrls: ['./verifyuser.component.scss']
})
export class VerifyuserComponent implements OnInit {
  public form:FormGroup;
  public settings: Settings;
  userId: string;
  accesToken: string;
  isValidate = false;
  private _submitted: boolean = false;
  public message : boolean = false;

  constructor( private activatedRoute: ActivatedRoute,public appSettings:AppSettings, private location: Location ,public fb: FormBuilder, public router:Router, public alertService: AlertService, public pagesService: PagesService) { 
    this.activatedRoute.queryParams.subscribe(params => {
      this.userId = params.uid;
      this.accesToken = params.activationToken;
    });
    this.settings = this.appSettings.settings; 
  }

  ngOnInit() {
    this.pagesService.userCreatePassword(this.userId, this.accesToken).then(res => {
      if (res.success) {
        this.message = true;
      } else {
        this.message = false;
      }
    });
  }

}
