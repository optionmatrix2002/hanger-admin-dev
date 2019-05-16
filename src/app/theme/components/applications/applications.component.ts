import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Moment } from 'moment';
import * as moment from 'moment';
import * as jQuery from 'jquery';
import { constructor } from 'daterangepicker';
import 'rxjs/add/operator/map';
import { MatMonthView } from '@angular/material/datepicker';
import { ModalDirective } from 'ngx-bootstrap';




@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ApplicationsComponent implements OnInit {

@ViewChild('filterModal') public filterModal: ModalDirective;

  start_date: any;

  end_date: any;
  constructor(){ }

  ngOnInit() {
    this.start_date = moment().subtract(29, 'days');

    this.end_date = moment();




    jQuery('.daterange').daterangepicker({
        ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        },
        opens: 'left',
        startDate: moment().subtract(29, 'days'),
        endDate: moment()
    }, function (x: any, y: any) {

        console.log(x);
        this.start_date = x;
        this.end_date = y;
       
    });

  }


//For Dropdown filter
selectedValue: string;
locations = [
  {value: 'Hyderabad-0', viewValue: 'Hyderabad'},
  {value: 'Chennai-1', viewValue: 'Chennai'},
  {value: 'Bangalore-2', viewValue: 'Bangalore'},
  {value: '0', viewValue: 'None'}

];
divisions = [
  {value: 'Project-0', viewValue: 'Project'},
  {value: 'Product-1', viewValue: 'Product'},
  {value: '0', viewValue: 'None'}

];
entities = [
  {value: '0', viewValue: 'Option Matrix'},
  {value: '1', viewValue: 'Option M'},
  {value: 'none', viewValue: 'None'}
];

years = [
  {value: '1', viewValue: '2012'},
  {value: '2', viewValue: '2013'},
  {value: '3', viewValue: '2014'},
  {value: '4', viewValue: '2015'},
  {value: '5', viewValue: '2016'},
  {value: '6', viewValue: '2017'},
  {value: '7', viewValue: '2018'}
];

filterModalToggle(e) {
  if (e == 1) {
    this.filterModal.show();
  } else {
    this.filterModal.hide();
  }
}


stopClickPropagate(event: any){
  event.stopPropagation();
  event.preventDefault();
}
}