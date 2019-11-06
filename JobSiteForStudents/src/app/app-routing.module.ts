import { AboutusComponent } from './aboutus/aboutus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchjobsComponent } from './searchjobs/searchjobs.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [

  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'jobs', component: SearchjobsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'aboutus', component: AboutusComponent }

  // {path : '', component : LoginComponent}

];
// const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
