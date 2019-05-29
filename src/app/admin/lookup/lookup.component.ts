import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { AddLookupDialogComponent } from './add-lookup-dialog/add-lookup-dialog.component';
import { MatDialog } from '@angular/material';
import { AlertService } from '../../shared/alert.service';
import { PageEvent } from '@angular/material';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.scss'], encapsulation: ViewEncapsulation.None,
  providers: [AlertService]
})
export class LookupComponent implements OnInit {

  constructor(public alertService: AlertService,
    public pagesService: PagesService,
    public dialog: MatDialog, private changeDetectorRefs: ChangeDetectorRef) { }
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;
  tableList: any;
  pageEvent: PageEvent;
  public pageSize = parseInt(localStorage.getItem('settings') ? localStorage.getItem('settings') : '5');
  public currentPage = 0;
  public totalSize = 0;
  public page: any;
  canCreate: any;
  canUpdate: any;
  canDelete: any;
  showEmpty: boolean = true;

  ngOnInit() {
    this.getLookupOptions(null);
    // let userdata = JSON.parse(localStorage.getItem('sg_user_info')).user_permissions[13];
    // this.canCreate = parseInt(userdata.permission_type.split('')[0]);
    // this.canUpdate = parseInt(userdata.permission_type.split('')[2]);
    // this.canDelete = parseInt(userdata.permission_type.split('')[3]);
  }

  getLookupOptions(lookup_name) {
    let filterObj = {};
    filterObj['page'] = this.currentPage;
    filterObj['per_page'] = this.pageSize;
    if(lookup_name) {
      filterObj['lookup_name'] = lookup_name;
    }
    this.pagesService.getLookupOptions(filterObj)
      .then(data => {
        if (data.success) {
          this.tableList = data.results;
          //console.log(data.results);
          this.totalSize = data.count;
          data.count ? this.showEmpty = false : this.showEmpty = true;
          this.changeDetectorRefs.detectChanges();
        } else {
          this.tableList = [];
          this.totalSize = 0;
          this.showEmpty = true;
          this.alertService.createAlert(data.message, 0);
        }
      }
      );
  }

  filterLookups(lookup_name) {
    if(lookup_name)
      this.getLookupOptions(lookup_name);
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.getLookupOptions(null);
  }

  public updateLookupDialog(lookup) {
    let dialogRef = this.dialog.open(AddLookupDialogComponent, {
      data: lookup,
      height: 'auto',
      width: '600px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {
      console.log(data);
      if (data == 'save') {
        this.getLookupOptions(null);
      }
    });
  }

  updateLookup(lookup_id, changedValue, type) {
    let detail = { "lookup_id": lookup_id };
    if (type == 'status') {
      detail['is_active'] = changedValue;
    } else {
      detail['is_deleted'] = changedValue;
    }
    this.pagesService.updateLookup(detail)
      .then(data => {
        if (data.success) {
          let message = "";
          if (type == 'status')
            message = changedValue ? "activated" : "inactivated";
          else
            message = "deleted";
          this.alertService.createAlert("Lookup " + message + " successfully", 1);
          this.getLookupOptions(null);
        }
        else {
          this.alertService.createAlert(data.message, 0);
        }
      });
  }

}
