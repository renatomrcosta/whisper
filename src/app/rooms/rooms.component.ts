import { Component, OnInit } from '@angular/core';
import {RoomsService} from './rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  constructor(private roomsService: RoomsService) { }

  ngOnInit() {
  }

}
