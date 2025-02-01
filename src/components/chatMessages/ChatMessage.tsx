import cx from 'classnames';
import { FC } from 'react';

import { ChatMessageProps } from './ChatMessages.types';
import classNames from './chatMessages.module.scss';

export const ChatMessage: FC<ChatMessageProps> = ({ message, sendByMe }) => {
  return (
    <div
      className={cx({
        [classNames.sendByMe]: sendByMe,
        [classNames.sendNotByMe]: !sendByMe,
      })}
    >
      <div className={classNames.message}>{message}</div>
    </div>
  );
};
