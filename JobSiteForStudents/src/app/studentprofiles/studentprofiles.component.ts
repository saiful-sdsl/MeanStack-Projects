import { Component, OnInit } from "@angular/core";
import { StudentService } from "../student.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-studentprofiles",
  templateUrl: "./studentprofiles.component.html",
  styleUrls: ["./studentprofiles.component.css"]
})
export class StudentprofilesComponent implements OnInit {
  title = "Design Studio Course";
  cardNumberInputHint: string = "Enter card number here";
  viewModel = "Home";
  public students;

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.studentService.getStudents().subscribe(
      data => {
        this.students = data;
        console.log(JSON.stringify(this.students));
      },
      err => console.error(err),
      () => console.log("Finished loading")
    );
  }

  onDelete(id: string) {
    console.log("onDelete item triggered. id: " + id);
    this.studentService.deleteStudent(id).subscribe(() => {
      console.log("Deleted msg from profile.ts file : " + id);
      setTimeout(function() {
        location.reload();
      }, 800);
    });
  }

  onUpdate(
    id: string,
    studentID: string,
    firstName: string,
    lastName: string,
    email: string,
    specialization: string,
    education: string,
    phoneNumber: string,
    selfIntro: string
  ) {
    this.router.navigate([
      "/editStudent",
      id,
      studentID,
      firstName,
      lastName,
      email,
      specialization,
      education,
      phoneNumber,
      selfIntro
    ]);
    console.log("Go for update student information. id: " + id);
  }
}
/*  */