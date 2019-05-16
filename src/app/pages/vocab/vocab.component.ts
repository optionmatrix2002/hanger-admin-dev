import { AdminsettingsService } from '../admin-settings/adminsettings.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AppSettings } from '../../app.settings';
import { Settings } from 'src/app/app.settings.model';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-vocab',
  templateUrl: './vocab.component.html',
  styleUrls: ['./vocab.component.scss']
})
export class VocabComponent implements OnInit {

  public users: any;
  public settings: Settings;
  status: boolean;
  myModel = true;
  disabled = true;


  
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
    this.users[Id]['status'] = !this.users[Id]['status'];

  }

  constructor(public appSettings:AppSettings, private adminsettings :AdminsettingsService) 
  {
    this.settings = this.appSettings.settings; 
    this.users = [
      { Id: 1, vocab: 'Stupid, Idiot', status:true},
    ];
    
  }


  ngOnInit() {
  }

}
