import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServComponent } from './serv/serv.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { BlogViewComponent } from './blog/blog-view/blog-view.component';
import { LayoutComponent } from './layout.component';
import { TeamComponent } from './team/team.component';
import { ServViewComponent } from './serv/serv-view/serv-view.component';
import { TeamViewComponent } from './team/team-view/team-view.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'bienvenue',
        component: HomeComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'services',
        component: ServComponent,
      },
      {
        path: 'services/:title_url/view',
        component: ServViewComponent,
      },
      {
        path: 'blogs',
        component: BlogListComponent,
      },
      { 
        path: 'blogs/:title_url/view',
        component: BlogViewComponent,
      },
      {
        path: 'teams',
        component: TeamComponent,
      },
      {
        path: 'teams/:id/view',
        component: TeamViewComponent,
      },
      {
        path: '',
        redirectTo: 'bienvenue',
        pathMatch: 'full',
      }
    ],
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
