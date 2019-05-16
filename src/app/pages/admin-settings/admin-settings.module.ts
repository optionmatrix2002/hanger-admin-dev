import { ConstructionComponent } from './../../construction/construction.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageStaffUsersComponent } from './manage-staff/manage-staff.component';
import { FormsModule } from '@angular/forms';
import { ModalDirective, ModalModule } from 'ngx-bootstrap';
import { SharedModule } from '../../shared/shared.module';
import {SliderModule} from 'primeng/slider';


export const routes :Routes = [
  { path: 'normalusers', component: ManageUsersComponent, data: { breadcrumb: 'Members' , helptext:{heading:'Members', text:'Members can be moderate from here'} } },
  { path: 'staffusers', component: ManageStaffUsersComponent, data: { breadcrumb: 'Users' , helptext:{heading:'Users', text:'Users & Permissions can be managed from here'} } },
  /* { path: 'preferences', component: PreferencesComponent, data: { breadcrumb: 'Preferences' , helptext:{heading:'Preferences', text:'System Preferences can be managed from here' }} },
  { path: 'setup', component: SetupComponent, data: { breadcrumb: 'Setup', helptext:{heading:'Setup', text:"Analytics, Dimensions and their respective KRA's & KPI's can be managed here"}  } },
  { path: 'structure', component: StructureComponent, data: { breadcrumb: 'Structure' , helptext:{heading:'Structure', text:'Organisation structure can be managed from here'} } },
  { path: 'target', component: TargetComponent, data: { breadcrumb: 'Target' , helptext:{heading:'Target', text:''} } } */

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),ModalModule.forRoot(),
    FormsModule,
    SliderModule,
    HttpClientModule,
    SharedModule,
    
  ],
  exports:[RouterModule],
  declarations: [ManageStaffUsersComponent,ManageUsersComponent]
})
export class AdminSettingsModule { 


}
