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
        title: 'Page de bienvenue 3S-security',
      },
      {
        path: 'about',
        component: AboutComponent,
        title: 'A propos de 3S-security',
      },
      {
        path: 'contact',
        component: ContactComponent,
        title: 'Contactez-nous',
      },
      {
        path: 'services',
        component: ServComponent,
        title: 'Nos services',
      },
      {
        path: 'services/:title_url/view',
        component: ServViewComponent,
        title: 'Nos services',
      },
      {
        path: 'blogs',
        component: BlogListComponent,
        title: 'Nos blogs',
      },
      { 
        path: 'blogs/:title_url/view',
        component: BlogViewComponent,
        title: 'Nos blogs',
      },
      {
        path: 'teams',
        component: TeamComponent,
        title: 'Notre équipe',
      },
      {
        path: 'teams/:id/view',
        component: TeamViewComponent,
        title : 'Notre équipe',
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
