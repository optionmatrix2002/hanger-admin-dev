import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../../shared/alert.service';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { PagesService } from '../../../pages.service';

@Component({
  selector: 'app-add-badge-dialod',
  templateUrl: './add-badge-dialod.component.html',
  styleUrls: ['./add-badge-dialod.component.scss']
})
export class AddBadgeDialodComponent implements OnInit {
  addBadgeForm: FormGroup;

  constructor(public alertService: AlertService,public pagesService: PagesService,public dialogRef: MatDialogRef<AddBadgeDialodComponent>,@Inject(MAT_DIALOG_DATA) public badge: any,
  private fb:FormBuilder) { this.createAddBadgeForm() }

  ngOnInit() {
    console.log(this.badge);
    if(this.badge) {
      this.addBadgeForm.controls['badgeName'].setValue(this.badge.badge_name);
      this.addBadgeForm.controls['minimumCoins'].setValue(this.badge.minimum_points);
      this.addBadgeForm.controls['minimumConnections'].setValue(this.badge.minimum_connections);
      this.addBadgeForm.controls['minimumPosts'].setValue(this.badge.minimum_posts);
    }
  }

  get badgeName() { return this.addBadgeForm.get('badgeName'); }

  get minimumCoins() { return this.addBadgeForm.get('minimumCoins'); }

  get minimumConnections() { return this.addBadgeForm.get('minimumConnections'); }

  get minimumPosts() { return this.addBadgeForm.get('minimumPosts'); }

  createAddBadgeForm() {
    this.addBadgeForm = this.fb.group({
      badgeName : new FormControl('',[Validators.required,Validators.maxLength(60)]),
      minimumCoins : new FormControl('',[Validators.required,Validators.maxLength(5)]),
      minimumConnections : new FormControl('',[Validators.required,Validators.maxLength(5)]),
      minimumPosts : new FormControl('',[Validators.required,Validators.maxLength(5)]),
    });
  }

  saveBadge(filters) {
    let detail = {"badge_id": this.badge.badge_id};
    detail['minimum_points'] = this.addBadgeForm.value.minimumCoins;
    detail['minimum_connections'] = this.addBadgeForm.value.minimumConnections;
    detail['minimum_posts'] = this.addBadgeForm.value.minimumPosts;
    console.log(detail);
    this.pagesService.updateBadge(detail).then(data => {
      if(data.success) {
        this.alertService.createAlert("Badge Updated Successfully",1);
        this.dialogRef.close('save');
      }
      else {
        this.alertService.createAlert(data.message,0);
      }
    })
  }

  noWhiteSpaceValidator(control : FormControl) {
    let isWhiteSpace = (control.value || '').trim().length === 0;
    let isValid = !isWhiteSpace;
    return isValid ? null : {'whitespace':true};
  }

  close(): void {
    this.dialogRef.close();
  }

}
