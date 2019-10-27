import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})
export class RegistrationComponent {
  logName(x) {
    console.log("Value of First Name: " + x);
  }

  logComment(x) {
    console.log(x);
  }
}
