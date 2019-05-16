import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { BadgesComponent } from './pages/badges/badges.component';
import { EventsComponent } from './pages/events/events.component';
import { PostsComponent } from './pages/posts/posts.component';
import { GigsComponent } from './pages/gigs/gigs.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AnnouncementsComponent } from './pages/announcements/announcements.component';
import { VocabComponent } from './pages/vocab/vocab.component';
import { ViolationsComponent } from './pages/violations/violations.component';
import { IPComponent } from './pages/ip/ip.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { LookupComponent } from './pages/lookup/lookup.component';
import { ItemsComponent } from './pages/items/items.component';
import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PagesComponent } from './pages/pages.component';
import { BlankComponent } from './pages/blank/blank.component';
import { SearchComponent } from './pages/search/search.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { ErrorComponent } from './pages/errors/error/error.component';

export const routes: Routes = [
    {path:'', redirectTo:'login', pathMatch:'full'},
    { 
        path: '', 
        component: PagesComponent, children: [
            { path: 'dashboard', component: AdminDashboardComponent, data: { breadcrumb: 'Dashboard', helptext:{heading:'Dashboard', text:'This section provides summary of the trends & statistics'} } },
            { path: 'posts', component: PostsComponent, data: { breadcrumb: 'Posts', helptext:{heading:'Posts', text:'This page is used to moderate posts'} } },
            { path: 'events', component: EventsComponent, data: { breadcrumb: 'Events', helptext:{heading:'Events', text:'This page is used to moderate events'} } },
            //{ path: 'rewards', component: BadgesComponent, data: { breadcrumb: 'Badges', helptext:{heading:'Badges', text:'This page is used to add badges & criteria of qualification'} } },
            { path: 'rewards', loadChildren: './pages/rewards/rewards.module#RewardsModule', data: { breadcrumb: 'Badges', helptext:{heading:'Badges', text:'This page is used to add badges & criteria of qualification'} } },
            { path: 'gigs', component: GigsComponent, data: { breadcrumb: 'Gigs', helptext:{heading:'Gigs', text:'This page is used to moderate gigs'} } },
            { path: 'projects', component: ProjectsComponent, data: { breadcrumb: 'Projects', helptext:{heading:'Projects', text:'This page is used to moderate projects'} } },
            { path: 'announcements', component: AnnouncementsComponent, data: { breadcrumb: 'Announcements', helptext:{heading:'Announcements', text:'This page is used to publish announcements'} } },
            { path: 'vocab', component: VocabComponent, data: { breadcrumb: 'Vocabulary', helptext:{heading:'Vocabulary', text:'This page is used to add prohibited vocabulary'} } },
            { path: 'violations', component: ViolationsComponent, data: { breadcrumb: 'Violations', helptext:{heading:'Violations', text:'This page is used to manage reported violations'} } },
            { path: 'ip', component: IPComponent, data: { breadcrumb: 'IP', helptext:{heading:'IP', text:'This page is used to add restricted IPs'} } },
            { path: 'items', component: ItemsComponent, data: { breadcrumb: 'Items', helptext:{heading:'Items', text:'This page is used to manage Items'} } },
            { path: 'notifications', component: NotificationsComponent, data: { breadcrumb: 'Notifications', helptext:{heading:'Notifications', text:'This page is used to manage notification settings.'} } },
            { path: 'lookups', component: LookupComponent, data: { breadcrumb: 'Lookups', helptext:{heading:'Lookups', text:'This page is used to manage lookups.'} } },
            /* { path: 'users', loadChildren: './pages/users/users.module#UsersModule', data: { breadcrumb: 'Users' } }, */
            /* { path: 'ui', loadChildren: './pages/ui/ui.module#UiModule', data: { breadcrumb: 'UI' } },
            { path: 'form-controls', loadChildren: './pages/form-controls/form-controls.module#FormControlsModule', data: { breadcrumb: 'Form Controls' } },
            { path: 'tables', loadChildren: './pages/tables/tables.module#TablesModule', data: { breadcrumb: 'Tables' } },
            { path: 'icons', loadChildren: './pages/icons/icons.module#IconsModule', data: { breadcrumb: 'Material Icons' } },
            { path: 'drag-drop', loadChildren: './pages/drag-drop/drag-drop.module#DragDropModule', data: { breadcrumb: 'Drag & Drop' } },
            { path: 'schedule', loadChildren: './pages/schedule/schedule.module#ScheduleModule', data: { breadcrumb: 'Schedule' } },
            { path: 'system', loadChildren: './pages/system/system.module#SystemModule', data: { breadcrumb: 'System' } },
            { path: 'control', loadChildren: './pages/control/control.module#ControlModule', data: { breadcrumb: 'Control' } },
            { path: 'process', loadChildren: './pages/process/process.module#ProcessModule', data: { breadcrumb: 'Process' } },
          
            { path: 'predictive', loadChildren: './pages/predictiveanalytics/predictiveanalytics.module#PredictiveanalyticsModule', data: { breadcrumb: 'Predictive' } }, */
            // { path: 'underconstruction', component:ConstructionComponent, data: { breadcrumb: 'Under Construction' } },

            
             /* { path: 'mailbox', loadChildren: './pages/mailbox/mailbox.module#MailboxModule', data: { breadcrumb: 'Mailbox' } }, */
            { path: 'messages', loadChildren: './pages/chat/chat.module#ChatModule', data: { breadcrumb: 'Messages',helptext:{heading:'Messages', text:'Users can interact with other contacts'} } },
            /*{ path: 'maps', loadChildren: './pages/maps/maps.module#MapsModule', data: { breadcrumb: 'Maps' } },
            { path: 'charts', loadChildren: './pages/charts/charts.module#ChartsModule', data: { breadcrumb: 'Charts' } },
            { path: 'dynamic-menu', loadChildren: './pages/dynamic-menu/dynamic-menu.module#DynamicMenuModule', data: { breadcrumb: 'Dynamic Menu' }  },          
            { path: 'blank', component: BlankComponent, data: { breadcrumb: 'Blank page' } },
            { path: 'search', component: SearchComponent, data: { breadcrumb: 'Search' } },*/
            {path:'users', loadChildren:'./pages/admin-settings/admin-settings.module#AdminSettingsModule'}
        ]
    },
    { path: 'landing', loadChildren: './pages/landing/landing.module#LandingModule' },
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule' },
    { path: 'register', loadChildren: './pages/register/register.module#RegisterModule' },
    { path: 'error', component: ErrorComponent, data: { breadcrumb: 'Error' } },
    { path: '**', component: NotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
   preloadingStrategy: PreloadAllModules,  // <- comment this line for activate lazy load
   // useHash: true
});