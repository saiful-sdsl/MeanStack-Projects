import { Component, OnInit, Input } from "@angular/core";
import { StudentService } from '../student.service';

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})
export class RegistrationComponent implements OnInit{

  constructor(private studentService: StudentService){ }
  ngOnInit(){

  }

  minCharacterLength: number = 2;
  firstNameHint: string = 'Enter first name'
  lastNameHint: string = 'Enter last name'
  emailHint: string = 'Enter your email'
  specializationHint: string = 'Enter your specialization (should be comma seperated)'
  highestEducationLevelHint: string = 'Enter your highest education level'
  phoneNumberHint: string = 'Enter your phone number'
  introHint: string = 'Tell us about yourself'
  studentIDHint: string = 'Please enter student ID'


  @Input() firstName: string = "";
  @Input() lastName: string = "";
  @Input() email: string = "";
  @Input() specialization: string = "";
  @Input() education: string = "";
  @Input() phoneNumber: string = "";
  @Input() selfIntro: string = "";
  @Input() studentID: string = "";


  logName(x) {
    console.log("Value you entered: " + x);
  }

  logComment(x) {
    this.logName(x);
  }

  onClick() {
    this.studentService.addStudent(this.studentID, this.firstName, this.lastName);
    console.log("You entered below info > " + "\nFirst Name: " + this.firstName + "\nLast Name: "+ this.lastName + "\nEmail: "+ this.email + "\nSpecialization: "+this.specialization +"\nEducation: "+ this.education +"\nPhone: "+ this.phoneNumber +"\nIntro: "+ this.selfIntro);
    alert("You entered below info > " + "\nFirst Name: " + this.firstName + "\nLast Name: "+ this.lastName + "\nEmail: "+ this.email + "\nSpecialization: "+this.specialization +"\nEducation: "+ this.education +"\nPhone: "+ this.phoneNumber +"\nIntro: "+ this.selfIntro);
  }
}
