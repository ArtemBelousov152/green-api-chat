import { FC } from 'react';
import { Input, SendMessageButton } from 'widgets';

import classNames from './sendMessageBlock.module.scss';
import { SendMessageBlockProps } from './sendMessageBlock.types';

export const SendMessageBlock: FC<SendMessageBlockProps> = ({
  newMessage,
  sendMessage,
  setNewMessage,
  disabled,
}) => {
  return (
    <div className={classNames.sendBlock}>
      <div className={classNames.inputWrapper}>
        <Input
          placeholder="Введите сообщение"
          value={newMessage}
          onChange={(event) => {
            setNewMessage(event.target.value);
          }}
          onKeyDown={async (event) => {
            if (['NumpadEnter', 'Enter'].includes(event.code)) {
              await sendMessage();
            }
          }}
          type="text"
          disabled={disabled}
        />
      </div>

      <SendMessageButton onClick={sendMessage} disabled={disabled} />
    </div>
  );
};
