import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnDestroy {
  message: any = {};
  subscription: Subscription;

  constructor() {
      // subscribe to app component messages
     // this.subscription = this.messageService.getMessage().subscribe(message => { this.message = message; });
  }

  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
     // this.subscription.unsubscribe();
  }
}