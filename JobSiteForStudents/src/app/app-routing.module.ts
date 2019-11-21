import { CardtypedetectorComponent } from './cardtypedetector/cardtypedetector.component';
import { RandomgenComponent } from './randomgen/randomgen.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchjobsComponent } from './searchjobs/searchjobs.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StudentprofilesComponent } from './studentprofiles/studentprofiles.component';

const routes: Routes = [

  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'jobs', component: SearchjobsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'randomgenerator', component: RandomgenComponent },
  { path: 'cardtypedetector', component: CardtypedetectorComponent },
  { path: 'students', component: StudentprofilesComponent },
  { path : '', component : LoginComponent}

];
// const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
