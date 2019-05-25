import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Alert } from 'selenium-webdriver';
import { Settings } from 'src/app/app.settings.model';
import { AppSettings } from 'src/app/app.settings';
import { AlertService } from 'src/app/shared/alert.service';
import { PagesService } from 'src/app/admin/pages.service';

@Component({
  selector: 'app-verifyuser',
  templateUrl: './verifyuser.component.html',
  styleUrls: ['./verifyuser.component.scss']
})
export class VerifyuserComponent implements OnInit {
  public form: FormGroup;
  public settings: Settings;
  userId: string;
  accesToken: string;
  isValidate = false;
  private _submitted: boolean = false;
  public message: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
    public appSettings: AppSettings,
    private location: Location,
    public fb: FormBuilder, public router: Router,
    public alertService: AlertService,
    public pagesService: PagesService) {
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
