import {User} from './user';

export interface Message {
  id: string,
  user: User,
  roomId: string,
  datetime: object,
  text: string
}
