import { Component, OnInit } from '@angular/core';
import { AddBadgeDialodComponent } from './add-badge-dialod/add-badge-dialod.component';
import { MatDialog } from '@angular/material';
import { PagesService } from '../../pages.service';
import { AlertService } from '../../../shared/alert.service';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss']
})
export class BadgesComponent implements OnInit {
  tableList: any;
  showEmpty : boolean = true;
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;

  constructor(public dialog: MatDialog,public pagesService: PagesService,public alertService: AlertService) { }

  public updateBadgeDialog(lookup) {
    let dialogRef = this.dialog.open(AddBadgeDialodComponent, {
        data: lookup,
        height: 'auto',
        width: '600px',
        autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {
      if(data == 'save') {
        this.getBadges({});
      }
    });
  }

  updateBadge(badge_id, changedValue, type) {
    let detail = {"badge_id": badge_id};
    if(type == 'status') {
      detail['is_active'] = changedValue;
    } else {
      detail['is_deleted'] = changedValue;
    }
    this.pagesService.updateBadge(detail)
    .then(data => {
      if(data.success) {
        let message = "";
        if(type == 'status')
          message = changedValue ? "activated" : "inactivated";
        else
          message = "deleted";
        this.alertService.createAlert("Badge "+ message +" successfully" , 1);
        this.getBadges({});
      }
      else {
        this.alertService.createAlert(data.message , 0);
      }
    });
  }

  ngOnInit() {
    this.getBadges({});
  }

  getBadges(filters) {
    this.pagesService.getBadges(filters).then(data => {
      if(data.success) {
        this.tableList = data.results;
        this.showEmpty = false;
      }
      else {
        this.tableList = [];
        this.showEmpty = true;
        this.alertService.createAlert(data.message,0);
      }
    })
  }

}
