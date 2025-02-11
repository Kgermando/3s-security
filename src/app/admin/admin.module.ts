import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuillModule } from 'ngx-quill';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from './nav/sidebar/sidebar.component';
import { HeaderAdminComponent } from './nav/header-admin/header-admin.component';
import { ServiceListComponent } from './services/service-list/service-list.component';
import { ServiceAddComponent } from './services/service-add/service-add.component';
import { ServiceEditComponent } from './services/service-edit/service-edit.component';
import { SliderAddComponent } from './home-slider/slider-add/slider-add.component';
import { SliderEditComponent } from './home-slider/slider-edit/slider-edit.component';
import { SliderListComponent } from './home-slider/slider-list/slider-list.component';
import { TeamListComponent } from './teams/team-list/team-list.component';
import { TeamAddComponent } from './teams/team-add/team-add.component';
import { TeamEditComponent } from './teams/team-edit/team-edit.component';
import { PartenaireListComponent } from './partenaires/partenaire-list/partenaire-list.component';
import { PartenaireAddComponent } from './partenaires/partenaire-add/partenaire-add.component';
import { PartenaireEditComponent } from './partenaires/partenaire-edit/partenaire-edit.component';
import { AdminBlogListComponent } from './blogs/admin-blog-list/admin-blog-list.component';
import { AdminBlogEditComponent } from './blogs/admin-blog-edit/admin-blog-edit.component';
import { AdminBlogAddComponent } from './blogs/admin-blog-add/admin-blog-add.component'; 
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminBlogViewComponent } from './blogs/admin-blog-view/admin-blog-view.component';
import { NewsLettersComponent } from './news-letters/news-letters.component';


@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent,
    HeaderAdminComponent,
    ServiceListComponent,
    ServiceAddComponent,
    ServiceEditComponent,
    SliderAddComponent,
    SliderEditComponent,
    SliderListComponent,
    TeamListComponent,
    TeamAddComponent,
    TeamEditComponent,
    PartenaireListComponent,
    PartenaireAddComponent,
    PartenaireEditComponent,
    AdminBlogListComponent,
    AdminBlogEditComponent,
    AdminBlogAddComponent,
    DashboardComponent,
    AdminBlogViewComponent,
    NewsLettersComponent, 
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,

    SharedModule, 
    QuillModule
  ]
})
export class AdminModule { }
