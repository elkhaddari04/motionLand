import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ServiceComponent } from './service/service.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { QustionComponent } from './qustion/qustion.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CallComponent } from './call/call.component';
@NgModule({
  declarations: [IndexComponent, ServiceComponent, OurTeamComponent, QustionComponent, CallComponent, ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    ScrollToModule.forRoot(),
    NgbModalModule,
    NgxYoutubePlayerModule,
    NgbModule,
   ]
})
export class PagesModule { }
