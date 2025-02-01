import { FC, memo } from 'react';

import { ChatMessage } from './ChatMessage';
import { ChatMessagesProps } from './ChatMessages.types';
import classNames from './chatMessages.module.scss';

const ChatMessagesComponent: FC<ChatMessagesProps> = ({ messages }) => {
  return (
    <div className={classNames.chatMessagesWrapper}>
      <div className={classNames.chatMessages}>
        {[...messages].reverse().map(({ message, sendByMe }, index) => (
          <ChatMessage
            message={message}
            sendByMe={sendByMe}
            key={`${message}_${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export const ChatMessages = memo(ChatMessagesComponent);
