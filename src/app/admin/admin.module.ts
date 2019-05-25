import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { LookupComponent } from './lookup/lookup.component';
import { ModerateusersComponent } from './moderateusers/moderateusers.component';
import { AddLookupDialogComponent } from './lookup/add-lookup-dialog/add-lookup-dialog.component'
import { AddUserDialogComponent } from './moderateusers/add-user-dialog/add-user-dialog.component';
import { NgxMatDrpModule } from 'ngx-mat-daterange-picker';
import { ChartModule } from 'angular-highcharts';
import { ModalModule } from 'ngx-bootstrap';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

export const routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: AdminDashboardComponent, data: { breadcrumb: 'Dashboard', helptext:{heading:'Dashboard', text:'This section provides summary of the trends & statistics'} } },
  { path: 'rewards', loadChildren: './rewards/rewards.module#RewardsModule', data: { breadcrumb: 'Badges', helptext:{heading:'Badges', text:'This page is used to add badges & criteria of qualification'} } },
  { path: 'announcements', component: AnnouncementsComponent, data: { breadcrumb: 'Announcements', helptext:{heading:'Announcements', text:'This page is used to publish announcements'} } },
  { path: 'lookups', component: LookupComponent, data: { breadcrumb: 'Lookups', helptext:{heading:'Lookups', text:'This page is used to manage lookups.'} } },
  { path: 'users', component: ModerateusersComponent, data: { breadcrumb: 'Members', helptext:{heading:'Members', text:'This page is used to manage lookups.'} } },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule,
    SharedModule,
    NgxMatDrpModule,
    ChartModule,
    ModalModule.forRoot(),
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    }),
  ],
  declarations: [
    AdminDashboardComponent,
    AnnouncementsComponent,
    LookupComponent,
    ModerateusersComponent,
    AddLookupDialogComponent,
    AddUserDialogComponent
  ],
  entryComponents:[
    AddLookupDialogComponent,
    AddUserDialogComponent 
  ],
})
export class AdminModule { }