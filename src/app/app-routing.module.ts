import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'crisis-center',
    loadChildren: './crisis-center/crisis-center.module#CrisisCenterModule'
  },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false,
        preloadingStrategy: PreloadAllModules 
      } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
