import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { BlogComponent } from './blog/blog.component';
 import { ServicesComponent } from './services/services.component';

import { FeatherModule } from 'angular-feather';
import {
  Mail, Link, PhoneCall, Clock, MapPin, Facebook, Twitter, Instagram, Linkedin, Send, Calendar, User, Server, Rss, Layout, LifeBuoy,
  ArrowRightCircle, PieChart, Triangle
} from 'angular-feather/icons';
import { ScrollspyDirective } from './scrollspy.directive';
import { HeaderComponent } from './header/header.component';
import { AlertComponent } from './alert/alert.component';

const icons = {
  Mail, Link, PhoneCall, Clock, MapPin, Facebook, Twitter, Instagram, Linkedin, Send, Calendar, User, Server, Rss, Layout, LifeBuoy,
  ArrowRightCircle, PieChart, Triangle
};

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [FeaturesComponent, PricingComponent, BlogComponent, ServicesComponent, ScrollspyDirective, HeaderComponent, AlertComponent],
  imports: [
    CommonModule,
    FeatherModule.pick(icons)
  ],
  // tslint:disable-next-line: max-line-length
  exports: [FeaturesComponent, PricingComponent, BlogComponent, ServicesComponent,  FeatherModule, ScrollspyDirective,HeaderComponent,AlertComponent]
})
export class SharedModule { }
