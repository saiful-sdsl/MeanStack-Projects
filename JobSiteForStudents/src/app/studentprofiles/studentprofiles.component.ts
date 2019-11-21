import { Component, OnInit } from "@angular/core";
import { StudentService } from "../student.service";

@Component({
  selector: "app-studentprofiles",
  templateUrl: "./studentprofiles.component.html",
  styleUrls: ["./studentprofiles.component.css"]
})
export class StudentprofilesComponent implements OnInit {
  title = "Design Studio Course Lab9";
  viewModel = "Home";
  public students;

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.studentService.getStudents().subscribe(
      data => {
        console.log('Loaded student list from server.');
        this.students = data;
      },
      err => console.error(err),
      () => console.log("Finished loading")
    );
  }
}
