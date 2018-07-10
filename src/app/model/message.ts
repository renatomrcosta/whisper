import {User} from "firebase";

export interface Message {
  id: string,
  user: User,
  roomId: string,
  datetime: object,
  text: string
}
