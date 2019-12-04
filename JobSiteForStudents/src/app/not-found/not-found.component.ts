import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  sendMessage(): void {
    // send message to subscribers via observable subject
    console.log('Goto home');
  //this.service.sendMessage('Message from app Component to message Component!');   
  }
   /*
  clearMessage():void{
  this.service.clearMessage();
  } */
}
