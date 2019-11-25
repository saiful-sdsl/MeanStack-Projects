import { Component, OnInit } from "@angular/core";
import { StudentService } from "../student.service";

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

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.studentService.getStudents().subscribe(
      data => {
        this.students = data;
      },
      err => console.error(err),
      () => console.log("Finished loading")
    );
  }

  onDelete(id: string) {
    console.log("onDelete item triggered. id: " + id);
    this.studentService.deleteStudent(id).subscribe(() => {
      console.log("Deleted msg from profile.ts file : " + id);
      setTimeout(function(){
        location.reload();
      }, 800);
    });;
  }
}
