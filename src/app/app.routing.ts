import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppGuard } from './app.guard';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
{
    path: 'admin',
    component: LayoutComponent, children: [
        { path: '', loadChildren: './admin/admin.module#AdminModule', canActivate:[AppGuard] },
        { path: '**', component: NotFoundComponent }
    ]
},
{ path: '', loadChildren: './authentication/login.module#LoginModule' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,  // <- comment this line for activate lazy load
    useHash: true
});
