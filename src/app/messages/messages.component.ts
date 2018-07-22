import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {MessagesService} from './messages.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  messages: Observable<any[]>;
  roomId: string;
  msgText: string;

  constructor(private route: ActivatedRoute, private messagesService: MessagesService) {
    this.route.params.subscribe(param => this.roomId = param['roomId']);
  }

  ngOnInit(): void {
    this.loadMessages();
  }

  loadMessages() {
    this.messages = this.messagesService.loadMessages(this.roomId);
  }

  addMessage() {
    this.messagesService.insertMesage({
      datetime: new Date(),
      roomId: this.roomId,
      text: this.msgText
    });
    this.clearForm();
  }

  clearForm() {
    this.msgText = '';
  }
}
