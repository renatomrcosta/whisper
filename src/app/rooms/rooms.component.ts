import { Component, OnInit } from '@angular/core';
import {RoomsService} from './rooms.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  rooms: Observable<any[]>;

  constructor(private roomsService: RoomsService) { }

  ngOnInit() {
    this.getRooms();
  }

  getRooms(){
    this.rooms = this.roomsService.getRooms();
  }
}
