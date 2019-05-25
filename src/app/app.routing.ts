import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppGuard } from './app.guard';

export const routes: Routes = [
    {   path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
        
       /* children: [
            { path: 'dashboard', component: AdminDashboardComponent, data: { breadcrumb: 'Dashboard', helptext:{heading:'Dashboard', text:'This section provides summary of the trends & statistics'} } },
            { path: 'rewards', loadChildren: './pages/rewards/rewards.module#RewardsModule', data: { breadcrumb: 'Badges', helptext:{heading:'Badges', text:'This page is used to add badges & criteria of qualification'} } },
            { path: 'announcements', component: AnnouncementsComponent, data: { breadcrumb: 'Announcements', helptext:{heading:'Announcements', text:'This page is used to publish announcements'} } },
            { path: 'lookups', component: LookupComponent, data: { breadcrumb: 'Lookups', helptext:{heading:'Lookups', text:'This page is used to manage lookups.'} } },
            { path: 'users', component: ModerateusersComponent, data: { breadcrumb: 'Members', helptext:{heading:'Members', text:'This page is used to manage lookups.'} } },
        ] */
    { path: '', loadChildren: './authentication/login/login.module#LoginModule' },
    { path: '**', component: NotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
   preloadingStrategy: PreloadAllModules,  // <- comment this line for activate lazy load
   // useHash: true
});