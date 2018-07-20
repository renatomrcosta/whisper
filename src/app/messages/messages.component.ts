import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {MessagesService} from './messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit{
  messages: Observable<any[]>;
  msgText: string;

  constructor(private messagesService: MessagesService){
  }

  ngOnInit(): void {
    this.loadMessages();
  }

  loadMessages(){
    this.messages = this.messagesService.loadMessages('1');
  }

  addMessage(){
    this.messagesService.insertMesage({
      datetime: new Date(),
      roomId: '1',
      text: this.msgText
    });
  }
