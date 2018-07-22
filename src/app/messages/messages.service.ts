import { Injectable } from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {AuthService} from '../auth/auth.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private db: AngularFirestore, private authService: AuthService){
  }

  insertMesage(message){
    message.user = this.buildUserObject();
    this.db.collection('messages').add(message);
  }

  private buildUserObject() {
    return {
      name: this.authService.user.displayName,
      email: this.authService.user.email
    };
  }

  loadMessages(roomId: string): Observable<any[]> {
    return this.db.collection('messages',
        query => query.where('roomId', '==', roomId).orderBy('datetime')).valueChanges();
  }
}
