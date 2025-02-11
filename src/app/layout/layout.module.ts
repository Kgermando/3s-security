import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SharedModule } from '../shared/shared.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServComponent } from './serv/serv.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { BlogViewComponent } from './blog/blog-view/blog-view.component';
import { TeamComponent } from './team/team.component';
import { RouterModule } from '@angular/router';
import { WhatWeDoComponent } from './about/what-we-do/what-we-do.component';
import { WhyChooseUsComponent } from './about/why-choose-us/why-choose-us.component';
import { AboutUsServicesComponent } from './about/about-us-services/about-us-services.component';
import { BestTeamComponent } from './about/best-team/best-team.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderNavComponent } from './common/header-nav/header-nav.component';
import { HomeSliderComponent } from './home/home-slider/home-slider.component';
import { HomeHowItWorksComponent } from './home/home-how-it-works/home-how-it-works.component';
import { HomeServicesComponent } from './home/home-services/home-services.component';
import { HomeTeamComponent } from './home/home-team/home-team.component';
import { HomeBlogsComponent } from './home/home-blogs/home-blogs.component';
import { HomePartenairesComponent } from './home/home-partenaires/home-partenaires.component'; 
import { HomeTestemonialsComponent } from './home/home-testemonials/home-testemonials.component';
import { ServViewComponent } from './serv/serv-view/serv-view.component';
import { TeamViewComponent } from './team/team-view/team-view.component';
import { SideBlogComponent } from './blog/blog-view/side-blog/side-blog.component';  
import { SectionHome1ContactComponent } from './home/section-home1-contact/section-home1-contact.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeaderNavComponent, 
    
    LayoutComponent,
    NotFoundComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent,
    ServComponent,
    BlogListComponent,
    BlogViewComponent,
    TeamComponent,
    WhatWeDoComponent,
    WhyChooseUsComponent,
    AboutUsServicesComponent,
    BestTeamComponent,
    HomeSliderComponent,
    HomeHowItWorksComponent,
    HomeServicesComponent,
    HomeTeamComponent,
    HomeBlogsComponent,
    HomePartenairesComponent,
    HomeTestemonialsComponent,
    ServViewComponent,
    TeamViewComponent,
    SideBlogComponent,
    SectionHome1ContactComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,

    RouterModule,

    SharedModule,
 
  ]
})
export class LayoutModule { }
