import { Message } from 'types';

export interface ChatMessagesProps {
  messages: Message[];
}

export interface ChatMessageProps extends Message {}
