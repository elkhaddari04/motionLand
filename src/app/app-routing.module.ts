import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceComponent } from './pages/service/service.component';
import {OurTeamComponent} from './pages/our-team/our-team.component'
import {QustionComponent} from './pages/qustion/qustion.component'

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  {path: 'service', component: ServiceComponent},
  {path: 'ourteam', component: OurTeamComponent},
  {path: 'according', component: OurTeamComponent},
  {path: 'qustion', component: QustionComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
