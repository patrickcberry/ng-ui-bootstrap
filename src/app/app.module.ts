import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TasksComponent } from './tasks/tasks.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { SidebarLayoutComponent } from './layouts/sidebar-layout/sidebar-layout.component';
import { SidebarPagesHomeComponent } from './sidebar-pages/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    HomeLayoutComponent,
    HeaderComponent,
    LandingComponent,
    SidebarLayoutComponent,
    SidebarPagesHomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
