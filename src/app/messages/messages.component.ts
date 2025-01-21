// import { Component, OnInit } from '@angular/core';
// import { MessageService } from '../messages.service'; 

// @Component({
//   selector: 'app-messages',
//   templateUrl: './messages.component.html',
//   styleUrls: ['./messages.component.css']
// })
// export class MessagesComponent implements OnInit {

//   constructor(public messageService: MessageService) {}

//   ngOnInit() {
//   }

// }


import { Component , OnInit } from '@angular/core';
import { MessageService } from '../messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit{
  showAllMessages = false;

  constructor(public messageService: MessageService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  toggleShowAllMessages(event: Event): void {
    event.preventDefault();
    this.showAllMessages = !this.showAllMessages;
  }
}
