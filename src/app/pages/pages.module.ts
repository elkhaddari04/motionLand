import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';

import { PagesRoutingModule } from './pages-routing.module';

import { SharedModule } from '../shared/shared.module';
import { ServiceComponent } from './service/service.component';
import { Service2Component } from './service2/service2.component';


@NgModule({
  declarations: [IndexComponent, ServiceComponent, Service2Component, ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    ScrollToModule.forRoot(),
    NgbModalModule,
    NgxYoutubePlayerModule
  ]
})
export class PagesModule { }
