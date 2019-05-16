import { AdminsettingsService } from '../admin-settings/adminsettings.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AppSettings } from '../../app.settings';
import { Settings } from 'src/app/app.settings.model';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent implements OnInit {

  public users: any;
  public settings: Settings;
  status: boolean;
  myModel = true;
  disabled = true;
  filter = false;

  
  @ViewChild('addUserModal') public addUserModal: ModalDirective;
  @ViewChild('deleteModal') public deleteModal: ModalDirective;
  @ViewChild('permissionModal') public permissionModal: ModalDirective;
  @ViewChild('permissionModal1') public permissionModal1: ModalDirective;
  @ViewChild('entitiesModal') public entitiesModal: ModalDirective;

  
  

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

  constructor(public appSettings:AppSettings, private adminsettings :AdminsettingsService) 
  {
    this.settings = this.appSettings.settings; 
    this.users = [
      { Id: 1, name: 'Privacy Policy', profession:'Photographers', type: "Text", badge:'Gold', description:"We have updated our privacy policy. Please read latest documentation.", capacity:'1000', tickets:'Free', visibility:'Public',location:'Canada' },
      { Id: 3, name: 'Pricing', profession:'Fashion Designers', type: "Push notification", badge:'Silver', description:"We have updated our pricing policy. Please read latest documentation.", capacity:'1000', tickets:'Paid', visibility:'Private',location:'US' },
    ];
    
  }


  ngOnInit() {
  }

}
