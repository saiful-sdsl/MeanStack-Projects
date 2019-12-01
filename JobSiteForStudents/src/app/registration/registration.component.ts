import { Component, OnInit, Input } from "@angular/core";
import { StudentService } from "../student.service";
import { Router, ParamMap, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})
export class RegistrationComponent implements OnInit {
  private mode = "update";
  private title = "New Student Registration";
  private id: string;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      console.log(
        "onngOnInit: " +
          paramMap.get("_id") +
          " firstName: " +
          paramMap.get("_firstName") +
          " education: " +
          paramMap.get("_education")
      );
      if (paramMap.has("_id")) {
        this.title = "Update Student Registration";
        this.mode = "Update";
        this.id = paramMap.get("_id");
        this.studentID = paramMap.get("_studentID");
        this.firstName = paramMap.get("_firstName");
        this.lastName = paramMap.get("_lastName");
        this.email = paramMap.get("_email");
        this.specialization = paramMap.get("_specialization");
        this.education = paramMap.get("_education");
        this.phoneNumber = paramMap.get("_phoneNumber");
        this.selfIntro = paramMap.get("_selfIntro");
      } else {
        this.title = "New Student Registration";
        this.mode = "Register";
        this.id = null;
      }
    });
  }

  minCharacterLength: number = 2;
  firstNameHint: string = "Enter first name";
  lastNameHint: string = "Enter last name";
  emailHint: string = "Enter your email";
  specializationHint: string =
    "Enter your specialization (should be comma seperated)";
  highestEducationLevelHint: string = "Enter your highest education level";
  phoneNumberHint: string = "Enter your phone number";
  introHint: string = "Tell us about yourself";
  studentIDHint: string = "Please enter student ID";

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
    if(this.mode == 'Register'){
      this.studentService
      .addStudent(
        this.studentID,
        this.firstName,
        this.lastName,
        this.email,
        this.specialization,
        this.education,
        this.phoneNumber,
        this.selfIntro
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
    console.log(
      "You entered below info > " +
        "\nFirst Name: " +
        this.firstName +
        "\nLast Name: " +
        this.lastName +
        "\nEmail: " +
        this.email +
        "\nSpecialization: " +
        this.specialization +
        "\nEducation: " +
        this.education +
        "\nPhone: " +
        this.phoneNumber +
        "\nIntro: " +
        this.selfIntro
    );
    this.router.navigate(["/students"]);
    } else {
      this.studentService
      .updateStudent(
        this.id,
        this.studentID,
        this.firstName,
        this.lastName,
        this.email,
        this.specialization,
        this.education,
        this.phoneNumber,
        this.selfIntro
      )
      .subscribe(responseData => {
        console.log(responseData);
        this.router.navigate(["/students"]);
      });

    }
    
    /*     alert(
      "You entered below info > " +
        "\nFirst Name: " +
        this.firstName +
        "\nLast Name: " +
        this.lastName +
        "\nEmail: " +
        this.email +
        "\nSpecialization: " +
        this.specialization +
        "\nEducation: " +
        this.education +
        "\nPhone: " +
        this.phoneNumber +
        "\nIntro: " +
        this.selfIntro
    ); */
  }
}
