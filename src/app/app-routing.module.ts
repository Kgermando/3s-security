import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './layout/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then(
        (m) => m.AuthModule
      ),
  },
  {
    path: '@admin',
    loadChildren: () =>
      import('./admin/admin.module').then(
        (m) => m.AdminModule
      ),
  },
  {
    path: 'web',
    loadChildren: () =>
      import('./layout/layout.module').then(
        (m) => m.LayoutModule
      ),
  },
  {
    path: '',
    redirectTo: 'web',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
