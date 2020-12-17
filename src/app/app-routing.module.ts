import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceComponent } from './pages/service/service.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  {path: 'service',
  component: ServiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
