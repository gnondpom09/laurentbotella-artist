import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
	{ path: '', loadChildren: () => import('./public/public.module').then(mod => mod.PublicModule) },
	{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule) },
	{ path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
