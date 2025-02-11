import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminBlogListComponent } from './blogs/admin-blog-list/admin-blog-list.component';
import { AdminBlogAddComponent } from './blogs/admin-blog-add/admin-blog-add.component';
import { AdminBlogEditComponent } from './blogs/admin-blog-edit/admin-blog-edit.component';
import { SliderAddComponent } from './home-slider/slider-add/slider-add.component';
import { SliderListComponent } from './home-slider/slider-list/slider-list.component';
import { SliderEditComponent } from './home-slider/slider-edit/slider-edit.component';
import { PartenaireListComponent } from './partenaires/partenaire-list/partenaire-list.component';
import { PartenaireAddComponent } from './partenaires/partenaire-add/partenaire-add.component';
import { PartenaireEditComponent } from './partenaires/partenaire-edit/partenaire-edit.component';
import { ServiceListComponent } from './services/service-list/service-list.component';
import { ServiceAddComponent } from './services/service-add/service-add.component';
import { ServiceEditComponent } from './services/service-edit/service-edit.component';
import { TeamListComponent } from './teams/team-list/team-list.component';
import { TeamAddComponent } from './teams/team-add/team-add.component';
import { TeamEditComponent } from './teams/team-edit/team-edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsLettersComponent } from './news-letters/news-letters.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      { path: 'blogs/blog-list', component: AdminBlogListComponent },
      { path: 'blogs/blog-add', component: AdminBlogAddComponent },
      { path: 'blogs/blog-edit/:id/edit', component: AdminBlogEditComponent },

      { path: 'home/slider-list', component: SliderListComponent },
      { path: 'home/slider-add', component: SliderAddComponent },
      { path: 'home/slider-edit/:id/edit', component: SliderEditComponent },

      { path: 'partenaires/partenaire-list', component: PartenaireListComponent },
      { path: 'partenaires/partenaire-add', component: PartenaireAddComponent },
      { path: 'partenaires/partenaire-edit/:id/edit', component: PartenaireEditComponent },

      { path: 'services/service-list', component: ServiceListComponent },
      { path: 'services/service-add', component: ServiceAddComponent },
      { path: 'services/service-edit/id/edit', component: ServiceEditComponent },

      { path: 'teams/team-list', component: TeamListComponent },
      { path: 'teams/team-add', component: TeamAddComponent },
      { path: 'teams/team-edit/:id/edit', component: TeamEditComponent },

      { path: 'newsLetters/newsLetter-list', component: NewsLettersComponent },

      { path: 'dashboard', component: DashboardComponent },

      { path: '', redirectTo: 'blogs/blog-list', pathMatch: "full" },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
