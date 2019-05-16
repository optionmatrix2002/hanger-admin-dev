import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AppSettings } from '../../app.settings';
import { Settings } from 'src/app/app.settings.model';
import { ModalDirective } from 'ngx-bootstrap';
import { LookupService } from './lookup.service';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

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
  codeTypes= [{"id":1,"title":"User Type"}, {"id":2,"title":"Industry"}];
  addLookUpForm:FormGroup;


  
  @ViewChild('addUserModal') public addUserModal: ModalDirective;
  @ViewChild('deleteModal') public deleteModal: ModalDirective;
  @ViewChild('permissionModal') public permissionModal: ModalDirective;
  @ViewChild('permissionModal1') public permissionModal1: ModalDirective;
  @ViewChild('entitiesModal') public entitiesModal: ModalDirective;

  getLookups(filters) {
    this.lookupService.getLookups(filters).then(data => {
      if(data.success) {
        console.log(data.results);
      }
      else {
        console.log(data.message);
      }
    })
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

  createLookUpForm() {
    this.addLookUpForm = this.fb.group({
      addLookUpName:this.fb.array([]),
      code:new FormControl('',[Validators.required])
    });
  }

  get code() { return this.addLookUpForm.get('code'); }

  get addLookUpName() { return this.addLookUpForm.get('addLookUpName') as FormArray; };

  constructor(public appSettings:AppSettings, public lookupService: LookupService,private fb:FormBuilder) { 
    this.createLookUpForm();
    this.settings = this.appSettings.settings; 
    this.users = [
      { Id: 1, code: 'Industry', lookup:"Mining", status:'Active',criteria2: '150',  criteria3: '150'},
      { Id: 2, code: 'User Type', lookup:"Staff User", status:'In-active',criteria2: '250',  criteria3: '250'},
      { Id: 3, code: 'User Type', lookup:"CEO ", status:'Active ',criteria2: '350',  criteria3: '350'},
      { Id: 4, code: 'Industry', lookup:"IT", status:'Active',criteria2: '450',  criteria3: '450'},
    ];
  }

  ngOnInit() {
    this.getLookups({});
  }

  checkAddRow() {
    var flag = 0;
    var form = this.addLookUpForm;
    var key1 = 'addLookUpName';
    var i = (form.get(key1) as FormArray).controls.length;
    for (var k = 0; k < i; k++) {
      var chkCond1 = (form.get(key1) as FormArray).controls[k].value;
      if (!chkCond1) {
        flag++;
      }
      if (k + 1 == i) {
        if (flag == 0) {
          this.AddEmptyRow();
        } else {
          //this.alertService.createAlert('Please fill all lookup names fields before adding new one.', 0);
        }
      }
    }
  }

  AddRowWithData(value) {
    var form = this.addLookUpForm;
    var key1 = 'addLookUpName';
    (form.get(key1) as FormArray).push(new FormControl(value, [Validators.required, this.noWhiteSpaceValidator]));
  }

  AddEmptyRow() {
    var form = this.addLookUpForm;
    var key1 = 'addLookUpName';
    (form.get(key1) as FormArray).push(new FormControl('', [Validators.required, this.noWhiteSpaceValidator]));
  }

  removeObject(i) {
    this.addLookUpName.removeAt(i);
  }

  saveLookups() {
    // if(this.lookupObj) {
    //   let detail = {"lookup_id": this.lookupObj.lookup_id, "lookup_name": this.addLookUpName.controls[0].value}
    //   this.adminService.updateLookup(detail).then(data => {
    //     if(data.success) {
    //       this.alertService.createAlert("Lookups updated successfully" , 1);
    //       this.dialogRef.close('save');
    //     }
    //     else {
    //       this.alertService.createAlert(data.message , 0);
    //     }
    //   });
    // } 
      let tempArray = [];
      let temp = {};
      temp["code_master_id"] =  this.addLookUpForm.value.code;
      for( let i=0; i< this.addLookUpName.length; i++) {
        tempArray.push(this.addLookUpName.controls[i].value);
      }
      temp["lookup_names"] =  tempArray;
      this.lookupService.addLookup(temp)
      .then(data => {
        if(data.success) {
          console.log("success");
          //this.alertService.createAlert("Lookups saved successfully" , 1);
          //this.dialogRef.close('save');
        }
        else {
          console.log("Failed to add lookup");
          // this.alertService.createAlert(data.message , 0);
        }
      });
    
  }

  noWhiteSpaceValidator(control : FormControl) {
    let isWhiteSpace = (control.value || '').trim().length === 0;
    let isValid = !isWhiteSpace;
    return isValid ? null : {'whitespace':true};
  }

}
