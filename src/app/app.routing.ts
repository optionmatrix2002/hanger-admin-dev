import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppGuard } from './app.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadChildren: './authentication/login.module#LoginModule' },
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule' }, 
    { path: '**', component: NotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
   preloadingStrategy: PreloadAllModules,  // <- comment this line for activate lazy load
    useHash: true
});
