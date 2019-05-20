import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../shared/alert.service';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { PagesService } from '../../pages.service';

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.scss']
})
export class AddUserDialogComponent implements OnInit {

  badges: any;
  addUserForm: FormGroup;
  constructor(public alertService: AlertService,public pagesService: PagesService,public dialogRef: MatDialogRef<AddUserDialogComponent>,@Inject(MAT_DIALOG_DATA) public user: any,
  private fb:FormBuilder) { this.createAddUserForm() }

  ngOnInit() {
    console.log(this.user);
    
    if(this.user) {
      this.addUserForm.controls['userName'].setValue(this.user.full_name);
      this.addUserForm.controls['email'].setValue(this.user.tbl_user.email);
      this.addUserForm.controls['location'].setValue(this.user.location);
      this.addUserForm.controls['badge'].setValue(this.user.tbl_badge.badge_id);
    }
    this.getBadgesDropdown({});
  }

  get userName() { return this.addUserForm.get('userName'); }

  get email() { return this.addUserForm.get('userName'); }

  get location() { return this.addUserForm.get('location'); }

  get badge() { return this.addUserForm.get('badge'); }

  createAddUserForm() {
    this.addUserForm = this.fb.group({
      userName : new FormControl('',[Validators.required,Validators.maxLength(60)]),
      email : new FormControl('',[Validators.required]),
      location : new FormControl('',[Validators.required]),
      badge : new FormControl('',[Validators.required]),
    })
  }

  getBadgesDropdown(filter) {
    this.pagesService.getBadges(filter).then(data => {
      if(data.success) {
        this.badges = data.results;
      }
      else {
        this.alertService.createAlert(data.message,0);
      }
    })
  }

  close(): void {
    this.dialogRef.close();
  }

  saveUser() {
    let detail = {"user_id": this.user.user_id};
    detail['full_name'] = this.addUserForm.value.userName;
    detail['location'] = this.addUserForm.value.location;
    detail['badge_id'] = this.addUserForm.value.badge;
    console.log(detail);
    
  }

}
