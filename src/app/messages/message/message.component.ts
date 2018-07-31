import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input()
  public message: object;
  public uid: string;

  constructor(private authService: AuthService) {
    this.uid = this.authService.user.uid;
  }

  ngOnInit() {
  }

}
