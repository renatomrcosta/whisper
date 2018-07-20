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
    message.user = this.authService.user.displayName;
    this.db.collection('messages').add(message);
  }

  loadMessages(): Observable<any[]> {
    return this.db.collection('messages').valueChanges();
  }
}
