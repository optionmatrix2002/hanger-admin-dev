import { Component, OnInit, ViewChild } from '@angular/core';
import { AppSettings } from '../../app.settings';
import { Settings } from 'src/app/app.settings.model';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.scss']
})
export class LookupComponent implements OnInit {

  public users: any;
  public settings: Settings;
  status: boolean;
  myModel = true;
  disabled = true;
  code_master:any;


  
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
  itemstr: HTMLElement[] = [];
  agestr: HTMLElement[] = [];
  responsestr: HTMLElement[] = [];
  str: HTMLElement = <HTMLElement>document.getElementById("new_text");

  copy(type) {
    if(type=='lookup')
      this.itemstr.push(this.str);
    else if(type=='age')
      this.agestr.push(this.str);
    else
      this.responsestr.push(this.str);
  }

  remove(e) {
    document.getElementById("repeat-" + e).remove();
  }

  constructor(public appSettings:AppSettings) { 
    this.settings = this.appSettings.settings; 
    this.users = [
      { Id: 1, code: 'Industry', lookup:"Mining", status:'Active',criteria2: '150',  criteria3: '150'},
      { Id: 2, code: 'User Type', lookup:"Staff User", status:'In-active',criteria2: '250',  criteria3: '250'},
      { Id: 3, code: 'User Type', lookup:"CEO ", status:'Active ',criteria2: '350',  criteria3: '350'},
      { Id: 4, code: 'Industry', lookup:"IT", status:'Active',criteria2: '450',  criteria3: '450'},
    ];
  }

  ngOnInit() {
  }

}
