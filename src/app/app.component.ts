import { Component } from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {AngularFirestore} from "angularfire2/firestore";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Observable<any[]>;
  title = 'app';

  constructor(db: AngularFirestore){
    this.items = db.collection('msg').valueChanges();
  }
}
