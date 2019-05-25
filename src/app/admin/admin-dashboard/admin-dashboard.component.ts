import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import * as jQuery from 'jquery';
import 'rxjs/add/operator/map';
import { NgxDrpOptions, PresetItem, Range } from 'ngx-mat-daterange-picker';

import { Chart } from 'angular-highcharts';

@Component({
    selector: 'app-admin-dashboard',
    templateUrl: './admin-dashboard.component.html',
    styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
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

    constructor(){ }
  
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
          // window.alert('You chose:  ' + this.start.format('MMMM D, YYYY') + ' - ' + this.end.format('MMMM D, YYYY'));
      });
  
      // Starts here
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

    dimensionsummarychart = new Chart({
        chart: {
            type: 'pie'
          },
          title: {
            text: 'Distribution by profession',
          },
          tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                enabled: false,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
              }
            }
          }, navigation: {
            buttonOptions: {
              enabled: false
            }
          },
          series: [{
            name: 'State',
            data: [{
              name: 'Photographer',
              y: 20.22
            }, {
              name: 'Fashion Designer',
              y: 30.03
            }, {
              name: 'Boutique Owner',
              y: 25.16
            }, 
            {
                name: 'Hair Stylish',
                y: 10.16
            },
            {
                name: 'Model',
                y: 10.16
            },
            {
              name: 'Others',
              y: 5.36
            }]
          }]
    });

    // growthchart = new Chart({

    //     chart: {
    //         type: 'bar'
    //     },
    //     title: {
    //         text: 'Growth',
    //         align: 'left',
    //         x: 65,
    //         y: 20
    //     },

    //     xAxis: {
    //         categories: ['ANDROID', 'PHP', '.NET', 'IOS'],
    //         title: {
    //             text: null
    //         }
    //     },
    //     yAxis: {
    //         min: 0,


    //         title: {
    //             text: 'Projects',
    //             align: 'high'
    //         },

    //     },
    //     tooltip: {
    //         valueSuffix: ' projects'
    //     },
    //     plotOptions: {
    //         bar: {
    //             dataLabels: {
    //                 enabled: true
    //             }
    //         },

    //     },

    //     credits: {
    //         enabled: false
    //     },
    //     series: [{
    //         name: 'Year 2002',
    //         data: [107, 31, 65, 23]
    //     }, {
    //         name: 'Year 2007',
    //         data: [133, 156, 97, 48]
    //     }, {
    //         name: 'Year 2012',
    //         data: [81, 81, 71, 77]
    //     }, {
    //         name: 'Year 2017',
    //         data: [126, 101, 44, 38]
    //     }]
    // });

    kpisummarychart = new Chart({
        chart: {
            type: 'pie'
          },
          title: {
            text: 'Distribution by state',
          },
          tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                enabled: false,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
              }
            }
          }, navigation: {
            buttonOptions: {
              enabled: false
            }
          },
          series: [{
            name: 'State',
            data: [{
              name: 'Vancouver',
              y: 30.22
            }, {
              name: 'Toronto',
              y: 24.03
            }, {
              name: 'Ontario',
              y: 25.16
            }, {
              name: 'British Columbia',
              y: 12.36
            }, {
              name: 'Others',
              y: 4.20
            }]
          }]
    });

    krasummarychart = new Chart({
        chart: {
            type: 'pie'
          },
          title: {
            text: 'Distribution by age',
          },
          tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                enabled: false,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
              }
            }
          }, navigation: {
            buttonOptions: {
              enabled: false
            }
          },
          series: [{
            name: 'Age',
            data: [{
              name: 'Between 0 - 15 Years',
              y: 10.22
            }, {
              name: 'Between 15 - 30 Years',
              y: 33.03
            }, {
              name: 'Between 30 - 50 Years',
              y: 35.16
            }, {
              name: 'Others',
              y: 12.36
            }]
          }]
    })

    exceptionschart = new Chart({
        chart: {
            type: 'column'
        },
        title: {
            text: 'No of active members',
            align: 'left',
            x: 65,
            y: 20
        },
        credits: {
            enabled: false
        },
        legend: {
            enabled: false
        },  

        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {

                text: null           }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [
            {
            name: 'Active Users',
            data: [200, 300, 400, 450, 700, 750, 720, 700, 650, 700, 750, 850]

        }, 
        
    ]
    });
}
