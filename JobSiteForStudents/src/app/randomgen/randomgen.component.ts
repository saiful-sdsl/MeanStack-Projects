import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-randomgen',
  templateUrl: './randomgen.component.html',
  styleUrls: ['./randomgen.component.css']
})
export class RandomgenComponent implements OnInit {

randomNumber:number = 0;
grade: string = "F";


  constructor() { }

  ngOnInit() {
    this.generateRandom();
  }
  randomNumberMessage = "";

  generateRandom() {
      this.randomNumber = Math.floor((Math.random() * 81) + 20);
      this.randomNumberMessage = "Generated Random Number: " + this.randomNumber;
  }

  switchHelper(){
    if (this.randomNumber <= 59)
    return "F";
  if (this.randomNumber >= 60 && this.randomNumber <= 69)
    return "D";
  if (this.randomNumber >=70 && this.randomNumber <= 80)
    return "C";
    if (this.randomNumber >=80 && this.randomNumber <= 89)
    return "B";
    if (this.randomNumber >=90 && this.randomNumber <= 100)
    return "A";
  }


}
