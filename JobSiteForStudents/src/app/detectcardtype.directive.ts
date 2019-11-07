import { Directive, Input, HostBinding, OnChanges } from '@angular/core';

@Directive({
  selector: '[appDetectcardtype]'
})
export class DetectcardtypeDirective implements OnChanges{
  cardName: string = "Discover";
  ngOnChanges() {
    const cardNumberPatternVISA = "4";
    const cardNumberPatternMaster = "5";
    const cardNumberPatternDiners = "30";
    const cardNumberPatternAmex = "34";
    const cardNumberPatternDiscover = "60";

    this.imageSource = './assets/visa_cc.JPG';
    if(this.cardNumber.startsWith(cardNumberPatternVISA)) {
      this.imageSource = './assets/visa_cc.JPG';
      this.cardName = "VISA";
    }
    if(this.cardNumber.startsWith(cardNumberPatternDiscover)) {
      this.imageSource = './assets/discover_cc.JPG';
      this.cardName = "Discover";
    }
    if(this.cardNumber.startsWith(cardNumberPatternDiners)) {
      this.imageSource = './assets/diners_cc.JPG';
      this.cardName = "Diners";
    }
    if(this.cardNumber.startsWith(cardNumberPatternAmex)) {
      this.imageSource = './assets/amex_cc.JPG';
      this.cardName = "Amex";
    }
    if(this.cardNumber.startsWith(cardNumberPatternMaster)) {
      this.imageSource = './assets/mastercard_cc.JPG';
      this.cardName = "Mastercard";
    }
  }

  constructor() { }

  @Input() cardNumber: string;

  @HostBinding('src') imageSource;


}
