import { Component, OnInit, ViewChild } from '@angular/core';
import { AppSettings } from '../../app.settings';
import { Settings } from 'src/app/app.settings.model';
import { ModalDirective } from 'ngx-bootstrap';
import * as moment from 'moment';
import { NgxDrpOptions, PresetItem, Range } from 'ngx-mat-daterange-picker';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  public users: any;
  public settings: Settings;
  status: boolean;
  myModel = true;
  disabled = true;
  filter = false;

  range:Range = {fromDate:new Date(), toDate: new Date()};
    options:NgxDrpOptions;
    presets:Array<PresetItem> = [];

    start_date: any;
    end_date: any;
    selected: any;
    alwaysShowCalendars: boolean;
    ranges: any = {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    }

  
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

  constructor(public appSettings:AppSettings) 
  {
    this.settings = this.appSettings.settings; 
    this.users = [
      { Id: 1, post_id:'Boutique', anchors: '20', reviews: '40', name: 'Yiorgos Avraamu', description:"Post related to boutique", capacity:'1000', tickets:'Free', visibility:'Public',location:'India',status:true },
      { Id: 2, post_id:'Photography',anchors: '20', reviews: '40',name: 'Avram Tarasios', description:"Post related to photography", capacity:'1000', tickets:'Paid', visibility:'Private',location:'US',status:true },
      { Id: 3, post_id:'Fashion',anchors: '20', reviews: '40',name: 'Quintin Ed', description:"Post related to latest fashion", capacity:'1000', tickets:'Free', visibility:'Public',location:'UK',status:true },
    ];
    
  }


  ngOnInit() {
    const today = new Date();
        const fromMin = new Date(today.getFullYear(), today.getMonth()-2, 1);
        const fromMax = new Date(today.getFullYear(), today.getMonth()+1, 0);
        const toMin = new Date(today.getFullYear(), today.getMonth()-1, 1);
        const toMax = new Date(today.getFullYear(), today.getMonth()+2, 0);
        this.setupPresets();
        this.options = {
            presets: this.presets,
            format: 'mediumDate',
            range: {fromDate:today, toDate: today},
            applyLabel: "Submit",
            calendarOverlayConfig: {
                shouldCloseOnBackdropClick: false
            }
            // cancelLabel: "Cancel",
            // excludeWeekends:true,
            // fromMinMax: {fromDate:fromMin, toDate:fromMax},
            // toMinMax: {fromDate:toMin, toDate:toMax}
        };
  }

  setupPresets() {
 
    const backDate = (numOfDays) => {
      const today = new Date();
      return new Date(today.setDate(today.getDate() - numOfDays));
    }
    
    const today = new Date();
    const yesterday = backDate(1);
    const minus7 = backDate(7)
    const minus30 = backDate(30);
    const currMonthStart = new Date(today.getFullYear(), today.getMonth(), 1);
    const currMonthEnd = new Date(today.getFullYear(), today.getMonth()+1, 0);
    const lastMonthStart = new Date(today.getFullYear(), today.getMonth()-1, 1);
    const lastMonthEnd = new Date(today.getFullYear(), today.getMonth(), 0);
    
    this.presets =  [
      {presetLabel: "Yesterday", range:{ fromDate:yesterday, toDate:today }},
      {presetLabel: "Last 7 Days", range:{ fromDate: minus7, toDate:today }},
      {presetLabel: "Last 30 Days", range:{ fromDate: minus30, toDate:today }},
      {presetLabel: "This Month", range:{ fromDate: currMonthStart, toDate:currMonthEnd }},
      {presetLabel: "Last Month", range:{ fromDate: lastMonthStart, toDate:lastMonthEnd }}
    ]
  }

}