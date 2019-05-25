import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinsComponent } from './coins/coins.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ModalModule } from "ngx-bootstrap";
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BadgesComponent } from './badges/badges.component';
import { AddBadgeDialodComponent } from './badges/add-badge-dialod/add-badge-dialod.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material';

export const routes = [
  { path: '', redirectTo: 'badges', pathMatch: 'full' },
  { path: 'badges', component: BadgesComponent, data: { breadcrumb: 'Badges', helptext:{heading:'Badges', text:'This page is used to add badges & criteria of qualification'} } },
  { path: 'coins', component: CoinsComponent, data: { breadcrumb: 'Coins', helptext:{heading:'Coins', text:'This page is used to add coins & criteria of qualification'} } },
];

@NgModule({
  declarations: [CoinsComponent, BadgesComponent, AddBadgeDialodComponent, ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,
    FormsModule, 
    MatButtonModule,
    MatDialogModule,
    NgbModule,
    ReactiveFormsModule,
    MatIconModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    }),
    ModalModule.forRoot(),
    RouterModule.forChild(routes),
  ],
  entryComponents : [AddBadgeDialodComponent],
})
export class RewardsModule { }
