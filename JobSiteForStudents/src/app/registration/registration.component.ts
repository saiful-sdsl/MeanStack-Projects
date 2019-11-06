import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})
export class RegistrationComponent {

  minCharacterLength: number = 2;
  firstNameHint: string = 'Enter first name'
  lastNameHint: string = 'Enter last name'
  emailHint: string = 'Enter your email'
  specializationHint: string = 'Enter your specialization (should be comma seperated)'
  highestEducationLevelHint: string = 'Enter your highest education level'
  phoneNumberHint: string = 'Enter your phone number'
  introHint: string = 'Tell us about yourself'


  logName(x) {
    console.log("Value of First Name: " + x);
  }

  logComment(x) {
    console.log(x);
  }

  onClick() {
    alert("Clicked Submit Button.");
  }
}
