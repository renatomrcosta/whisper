import { Component, OnInit } from '@angular/core';
import {RoomsService} from './rooms.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  rooms: Observable<any[]>;

  constructor(private roomsService: RoomsService, private router: Router) { }

  ngOnInit() {
    this.getRooms();
  }

  getRooms(){
    this.rooms = this.roomsService.getRooms();
  }

  openRoom(room) {
    this.router.navigate(['/rooms', room.roomId, 'messages']);
  }
}
