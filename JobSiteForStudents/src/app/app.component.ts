import { Component, OnInit } from "@angular/core";
import { StudentService } from './student.service'

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent{
  title = "Design Studio Course";
  cardNumberInputHint: string = "Enter card number here";
  viewModel = "Home";
}
