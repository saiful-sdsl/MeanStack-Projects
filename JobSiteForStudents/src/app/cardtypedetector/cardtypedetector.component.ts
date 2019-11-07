import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardtypedetector',
  templateUrl: './cardtypedetector.component.html',
  styleUrls: ['./cardtypedetector.component.css']
})
export class CardtypedetectorComponent implements OnInit {
  cardName: string = "Discover";
  cardNumber:string;
  
  cardNumberInputHint: string = "Enter card number here";
  constructor() { }

  ngOnInit() {
  }

  onChangeInput(cardNumber: string){
    // console.log("Card Number: " + cardNumber);
    const cardNumberPatternVISA = "4";
    const cardNumberPatternMaster = "5";
    const cardNumberPatternDiners = "30";
    const cardNumberPatternAmex = "34";
    const cardNumberPatternDiscover = "60";
    
  
    if(cardNumber.startsWith(cardNumberPatternVISA)) this.cardName = "VISA";
    if(cardNumber.startsWith(cardNumberPatternDiscover)) this.cardName = "Discover";
    if(cardNumber.startsWith(cardNumberPatternDiners)) this.cardName = "Diners";
    if(cardNumber.startsWith(cardNumberPatternAmex)) this.cardName = "Amex";
    if(cardNumber.startsWith(cardNumberPatternMaster)) this.cardName = "MasterCard";
    this.cardNumber = cardNumber;
  }
}
