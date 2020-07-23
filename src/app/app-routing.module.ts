import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CompaniesComponent } from './pages/companies/companies.component';
import { NewcoComponent } from './pages/newco/newco.component';
import { FollowComponent } from './pages/follow/follow.component';


const routes: Routes = [
  {path : '', component : HomepageComponent},
  {path : 'home', component : HomepageComponent},
  {path : 'companies', component : CompaniesComponent},
  {path : 'newco', component : NewcoComponent},
  {path : 'follow', component : FollowComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
