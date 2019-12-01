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
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [

  { path: 'registration', component: RegistrationComponent },
  { path: 'editStudent/:_id/:_studentID/:_firstName/:_lastName/:_email/:_specialization/:_education/:_phoneNumber/:_selfIntro', component: RegistrationComponent, pathMatch: 'full'},  // edit student information.
  { path: 'login', component: LoginComponent },
  { path: 'jobs', component: SearchjobsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'randomgenerator', component: RandomgenComponent },
  { path: 'cardtypedetector', component: CardtypedetectorComponent },
  { path: 'students', component: StudentprofilesComponent },
  { path: 'update', component: UpdatestudentComponent },
  { path: '', component: RegistrationComponent },
  { path : '**', component : NotFoundComponent}

];
// const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
