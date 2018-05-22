import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksComponent } from './tasks/tasks.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { LandingComponent } from './landing/landing.component';
import { SidebarLayoutComponent } from './layouts/sidebar-layout/sidebar-layout.component';
import { SidebarPagesHomeComponent } from './sidebar-pages/home/home.component';

const routes: Routes = [
    {
      path: '',
      component: HomeLayoutComponent,
      children: [
        {
          path: '',
          component: LandingComponent
        },
        {
          path: 'tasks',
          component: TasksComponent
        }
      ]
    },
    {
      path: 'sb',
      component: SidebarLayoutComponent,
      children: [
        {
          path: '',
          component: SidebarPagesHomeComponent
        }
      ]
    }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
