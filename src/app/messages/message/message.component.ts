import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {Message} from '../../model/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input()
  public message: Message;
  public uid: string;

  constructor(private authService: AuthService) {
    this.uid = this.authService.user.uid;
  }

  ngOnInit() {
  }

}
