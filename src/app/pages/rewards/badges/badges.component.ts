import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { AppSettings } from '../../../app.settings';
import { Settings } from 'src/app/app.settings.model';
import { ModalDirective } from 'ngx-bootstrap';
import { MatDialog } from '@angular/material';
import { AlertService } from '../../../shared/alert.service';
import {PageEvent} from '@angular/material';
import { PagesService } from '../../pages.service';
import { AddBadgeDialogComponent } from './add-badge-dialog/add-badge-dialog.component';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss'],encapsulation: ViewEncapsulation.None,
})
export class BadgesComponent implements OnInit {

  public users: any;
  public settings: Settings;
  status: boolean;
  myModel = true;
  disabled = true;
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;


  
  @ViewChild('addUserModal') public addUserModal: ModalDirective;
  @ViewChild('deleteModal') public deleteModal: ModalDirective;
  @ViewChild('permissionModal') public permissionModal: ModalDirective;
  @ViewChild('permissionModal1') public permissionModal1: ModalDirective;
  @ViewChild('entitiesModal') public entitiesModal: ModalDirective;

  
  public updateBadgeDialog(badge) {
    let dialogRef = this.dialog.open(AddBadgeDialogComponent, {
        data: badge,
        height: 'auto',
        width: '600px',
        autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {
      console.log(data);
      if(data == 'save') {
        //this.getLookupOptions();
      }
    });
  }

  onSubmit(){

  };
  getstatus(e){
this.status=e;
  }

  deleteModalToggle(e)
  {
    if(e==1){
      this.deleteModal.show();
    }
    else{
      this.deleteModal.hide();
    }
  }

  addUserModalToggle(e) {
    if (e == 1) {
      this.addUserModal.show();
    } else {
      this.addUserModal.hide();
    }
  }
  
  permissionModalToggle(e){
    if (e == 1) {
      this.addUserModal.hide();
      this.permissionModal.show();
    }
    else{
      this.addUserModal.show();
      this.permissionModal.hide();

    }
  }

  permissionModal1Toggle(e){
    if (e == 1) {
      this.permissionModal1.show();
    }
    else{
      this.permissionModal1.hide();

    }
  }


  assignEntityToggle(e){
    if (e == 1) {
      this.entitiesModal.show();
    }
    else{
      this.entitiesModal.hide();

    }
  }

  changeStatus(e, Id) {
    Id--;
    // console.log(id);
    // console.log(this.tableList[id]['vcStatus']);
    this.users[Id]['Status'] = !this.users[Id]['Status'];

  }

  constructor(public appSettings:AppSettings,public dialog: MatDialog) 
  {
    this.settings = this.appSettings.settings; 
    this.users = [
      { Id: 1, badge_name: 'Bronze Badge', badge_type:"Bronze", criteria1:'50',criteria2: '150',  criteria3: '150'},
      { Id: 2, badge_name: 'Silver  Badge', badge_type:"Silver ", criteria1:'150',criteria2: '250',  criteria3: '250'},
      { Id: 3, badge_name: 'Gold  Badge', badge_type:"Gold ", criteria1:'250 ',criteria2: '350',  criteria3: '350'},
      { Id: 4, badge_name: 'Platinum  Badge', badge_type:"Platinum ", criteria1:'350',criteria2: '450',  criteria3: '450'},
    ];
    
  }


  ngOnInit() {
  }

}
