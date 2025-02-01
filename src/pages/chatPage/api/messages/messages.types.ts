import { Message } from 'types';

export interface SendMessage {
  idInstance: string;
  apiTokenInstance: string;
  newMessage: string;
  phoneNumber: string;
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  setNewMessage: React.Dispatch<React.SetStateAction<string>>;
}

export interface ReceiveMessagev
  extends Pick<SendMessage, 'idInstance' | 'apiTokenInstance' | 'setMessages'> {
  startChat: boolean;
}
