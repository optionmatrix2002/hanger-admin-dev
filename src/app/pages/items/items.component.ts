import { Component, OnInit, ViewChild } from '@angular/core';
import { AppSettings } from '../../app.settings';
import { Settings } from 'src/app/app.settings.model';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

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
    this.users[Id]['Status'] = !this.users[Id]['Status'];

  }

  constructor(public appSettings:AppSettings) 
  {
    this.settings = this.appSettings.settings; 
    this.users = [
      { Id: 1, item_id:'126547568', price: '$100', quantity: '40', name: 'Leather Jacket', description:"The leather biker jacket is one of the most versatile and easy to wear jackets going." },
      { Id: 3, item_id:'126547768',price: '$200', quantity: '30',name: 'Watches', description:"Live life on your time with a watch that suites your dynamic lifestyle." },
      { Id: 2, item_id:'126667898',price: '$200', quantity: '20',name: 'Earrings', description:"Donna Fashion Green Oval Stud Gold Plated Earrings with Crystals for Women." },
    ];
    
  }


  ngOnInit() {
  }

}
