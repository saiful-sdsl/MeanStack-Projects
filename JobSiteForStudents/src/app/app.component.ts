import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  currentPath = "";
  title = "Design Studio Course";
  cardNumberInputHint: string = "Enter card number here";
  viewModel = "dashboard";
  constructor(router: Router) { 
    router.events.subscribe((url:any) => {
      this.currentPath = url.url;
      if(this.currentPath === undefined){
        
      } else {
        console.log("PATH: " + this.currentPath);
        if((this.currentPath == "/")){
          this.viewModel = "dashboard"
        } else {
          
        }

        if((this.currentPath.search("aboutus") == -1)){
          
        } else {
          this.viewModel = "aboutus"
        }
  
        if((this.currentPath.search("students") == -1)) {
        } else {
          this.viewModel = "students"
        }
        if((this.currentPath.search("registration") == -1)) {
        } else {
          this.viewModel = "registration"
        }
        if((this.currentPath.search("dashboard") == -1)) {
        } else {
          this.viewModel = "dashboard"
        }
      }
      
    });
   // to print only path eg:"/login"
}
}
