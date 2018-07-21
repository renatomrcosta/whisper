import {Injectable} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private db: AngularFirestore) {
  }

  getRooms(): Observable<any[]>{
    return this.db.collection('rooms').valueChanges();
  }
}
