import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../../shared/alert.service';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { PagesService } from '../../../pages.service';

@Component({
  selector: 'app-add-badge-dialog',
  templateUrl: './add-badge-dialog.component.html',
  styleUrls: ['./add-badge-dialog.component.scss'],
  providers: [AlertService]
})
export class AddBadgeDialogComponent implements OnInit {

  constructor(private fb:FormBuilder,public dialogRef: MatDialogRef<AddBadgeDialogComponent>,@Inject(MAT_DIALOG_DATA) public badgs: any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
