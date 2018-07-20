import {Injectable} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private db: AngularFirestore) {
  }

  getRooms(){
    return this.db.collection('rooms');
  }
}
