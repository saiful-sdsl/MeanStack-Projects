import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RegistrationComponent } from "./registration/registration.component";
import { NgbModule, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './material.module';

import {
  NgbdModalComponent,
  NgbdModalContent
} from "./registration/modal-component";
import { LoginComponent } from "./login/login.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { SearchjobsComponent } from "./searchjobs/searchjobs.component";
import { StudentprofilesComponent } from "./studentprofiles/studentprofiles.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { RandomgenComponent } from './randomgen/randomgen.component';
import { CardtypedetectorComponent } from './cardtypedetector/cardtypedetector.component';
import { DetectcardtypeDirective } from './detectcardtype.directive';
import { StudentService } from './student.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    NgbdModalComponent,
    NgbdModalContent,
    LoginComponent,
    AboutusComponent,
    SearchjobsComponent,
    StudentprofilesComponent,
    DashboardComponent,
    RandomgenComponent,
    CardtypedetectorComponent,
    DetectcardtypeDirective
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule {}
