import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';
import { CustomOverlayContainer } from './theme/utils/custom-overlay-container';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true,
  suppressScrollX: true               
};
import { CalendarModule } from 'angular-calendar';
import { SharedModule } from './shared/shared.module';
import { PipesModule } from './theme/pipes/pipes.module';
import { routing } from './app.routing';
import { Daterangepicker } from 'ng2-daterangepicker';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { ErrorComponent } from './pages/errors/error/error.component';
import { AppSettings } from './app.settings';

import { SidenavComponent } from './theme/components/sidenav/sidenav.component';
import { VerticalMenuComponent } from './theme/components/menu/vertical-menu/vertical-menu.component';
import { HorizontalMenuComponent } from './theme/components/menu/horizontal-menu/horizontal-menu.component';
import { BreadcrumbComponent } from './theme/components/breadcrumb/breadcrumb.component';
import { FlagsMenuComponent } from './theme/components/flags-menu/flags-menu.component';
import { FullScreenComponent } from './theme/components/fullscreen/fullscreen.component';
import { ApplicationsComponent } from './theme/components/applications/applications.component';
import { MessagesComponent } from './theme/components/messages/messages.component';
import { UserMenuComponent } from './theme/components/user-menu/user-menu.component';
import { ChartModule } from 'angular-highcharts';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgbAlertModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { AnnouncementsComponent } from './pages/announcements/announcements.component';
import { LookupComponent } from './pages/lookup/lookup.component';
import { AddLookupDialogComponent } from './pages/lookup/add-lookup-dialog/add-lookup-dialog.component'
import { NgxMatDrpModule } from 'ngx-mat-daterange-picker';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ToasterModule } from 'angular2-toaster';
import { ModerateusersComponent } from './pages/moderateusers/moderateusers.component';
import { AddUserDialogComponent } from './pages/moderateusers/add-user-dialog/add-user-dialog.component';


@NgModule({
  
  imports: [
    NgxMatDrpModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    }),
    BrowserModule,
    ToasterModule.forRoot(),
    HttpModule,
    BrowserAnimationsModule,     
    FormsModule, 
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBNcjxo_35qnEG17dQvvftWa68eZWepYE0'
    }), 
    PerfectScrollbarModule, 
    CalendarModule.forRoot(),
    SharedModule,
    PipesModule,
    routing,
    ChartModule,
    ModalModule.forRoot(),
    HttpClientModule,
    NgbPaginationModule, NgbAlertModule,
    Daterangepicker

    
  ],
  declarations: [
    LookupComponent,
    AddLookupDialogComponent,
    AnnouncementsComponent,
    AppComponent,
    PagesComponent,
    NotFoundComponent,
    ErrorComponent,
    SidenavComponent,
    VerticalMenuComponent,
    HorizontalMenuComponent,
    BreadcrumbComponent,
    FlagsMenuComponent,
    FullScreenComponent,
    ApplicationsComponent,
    MessagesComponent,
    UserMenuComponent,
    AdminDashboardComponent,
    ModerateusersComponent,
    AddUserDialogComponent,
    
    
    
    
  ],
  entryComponents:[
    VerticalMenuComponent,
    AddLookupDialogComponent,
    AddUserDialogComponent
  ],
  providers: [ 
    AppSettings,
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
    { provide: OverlayContainer, useClass: CustomOverlayContainer  },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }