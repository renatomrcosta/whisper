import {Component} from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {AngularFirestore} from "angularfire2/firestore";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent{
  messages: Observable<any[]>;

  constructor(private db: AngularFirestore, private authService: AuthService){
    this.messages = db.collection('messages').valueChanges();
  }

  addMessage(){
    this.db.collection('messages').add({
      datetime: new Date(),
      roomId: '1',
      text: 'bananinha',
      user: this.authService.user.displayName
    });
  }
}
