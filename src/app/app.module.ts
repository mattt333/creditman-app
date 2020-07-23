import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CompaniesComponent } from './pages/companies/companies.component';
import { NewcoComponent } from './pages/newco/newco.component';
import { FollowComponent } from './pages/follow/follow.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavBarComponent,
    CompaniesComponent,
    NewcoComponent,
    FollowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
