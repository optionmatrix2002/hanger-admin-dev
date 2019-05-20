import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from '../../shared/alert.service';
import { PageEvent } from '@angular/material';
import { PagesService } from '../pages.service';
import { AddUserDialogComponent } from './add-user-dialog/add-user-dialog.component';

@Component({
  selector: 'app-moderateusers',
  templateUrl: './moderateusers.component.html',
  styleUrls: ['./moderateusers.component.scss'],encapsulation: ViewEncapsulation.None,
  providers: [AlertService]
})
export class ModerateusersComponent implements OnInit {

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;
  tableList : any;
  pageEvent: PageEvent;
  public pageSize = parseInt(localStorage.getItem('settings') ? localStorage.getItem('settings') :'5');
  public currentPage = 0;
  public totalSize = 0;
  public page: any;
  canCreate:any;
  canUpdate:any;
  canDelete:any;
  showEmpty: boolean = true;

  constructor(public changeDetectorRefs:ChangeDetectorRef,public alertService: AlertService,public pagesService: PagesService,public dialog: MatDialog) { }

  ngOnInit() {
    this.getAllUsers({});
  }

  getAllUsers(filterObj) {
    filterObj['page'] = this.currentPage;
    filterObj['per_page'] = this.pageSize;
    this.pagesService.getAllUsers(filterObj).then(data => {
      if(data.success) {
        this.tableList = data.results;
        this.totalSize = data.count;
        console.log(this.tableList);
        data.count ? this.showEmpty = false : this.showEmpty = true;
        this.changeDetectorRefs.detectChanges();
      }
      else {
        this.tableList = [];
        this.showEmpty = false;
        this.totalSize = 0;
        this.alertService.createAlert(data.message,0);
      }
    })
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.getAllUsers({});
  }

  public updateUserDialog(user) {
    let dialogRef = this.dialog.open(AddUserDialogComponent, {
        data: user,
        height: 'auto',
        width: '600px',
        autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {
      console.log(data);
      if(data == 'save') {
        this.getAllUsers({});
      }
    });
  }

  updateUserStatus(user_id, changedValue, type) {
    let detail = {"user_id": user_id};
    if(type == 'status') {
      detail['is_active'] = changedValue;
    } else {
      detail['is_deleted'] = changedValue;
    }
    this.pagesService.updateUserStatus(detail)
    .then(data => {
      if(data.success) {
        let message = "";
        if(type == 'status')
          message = changedValue ? "activated" : "inactivated";
        else
          message = "deleted";
        this.alertService.createAlert("User "+ message +" successfully" , 1);
        this.getAllUsers({});
      }
      else {
        this.alertService.createAlert(data.message , 0);
      }
    });
  }

}
