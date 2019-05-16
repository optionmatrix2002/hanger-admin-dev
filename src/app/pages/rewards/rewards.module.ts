import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinsComponent } from './coins/coins.component';
import { BadgesComponent } from './badges/badges.component';
import { RouterModule } from '@angular/router';
import { ModalModule } from "ngx-bootstrap";
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

export const routes = [
  { path: '', redirectTo: 'badges', pathMatch: 'full' },
  { path: 'badges', component: BadgesComponent, data: { breadcrumb: 'Badges', helptext:{heading:'Badges', text:'This page is used to add badges & criteria of qualification'} } },
  { path: 'coins', component: CoinsComponent, data: { breadcrumb: 'Coins', helptext:{heading:'Coins', text:'This page is used to add coins & criteria of qualification'} } },
];

@NgModule({
  declarations: [CoinsComponent, BadgesComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,
    ModalModule.forRoot(),
    RouterModule.forChild(routes),
  ]
})
export class RewardsModule { }