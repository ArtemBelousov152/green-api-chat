import {
  ChatDataForm,
  ChatMessages,
  PhoneNumber,
  SendMessageBlock,
} from 'components';
import { FC, useEffect, useState } from 'react';
import { Message } from 'types';
import { Button } from 'widgets';

import { receiveMessagev, sendMessage } from './api/messages';
import classNames from './chatPage.module.scss';
import { ChatPageProps } from './chatPage.types';

export const ChatPage: FC<ChatPageProps> = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [startChat, setStartChat] = useState(false);
  const [idInstance, setIdInstance] = useState('');
  const [apiTokenInstance, setApiTokenInstance] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneEdit, setPhoneEdit] = useState(false);

  const handleSubmit = () => {
    setStartChat(true);
  };

  useEffect(() => {
    void receiveMessagev({
      apiTokenInstance,
      idInstance,
      setMessages,
      startChat,
    });
  }, [startChat]);

  return !startChat ? (
    <ChatDataForm
      apiTokenInstance={apiTokenInstance}
      handleSubmit={handleSubmit}
      idInstance={idInstance}
      setApiTokenInstance={setApiTokenInstance}
      setIdInstance={setIdInstance}
    />
  ) : (
    <div className={classNames.chatWrapper}>
      <div className={classNames.chatHeader}>
        <PhoneNumber
          phoneEdit={phoneEdit}
          phoneNumber={phoneNumber}
          setPhoneEdit={setPhoneEdit}
          setPhoneNumber={setPhoneNumber}
        />
        <Button
          onClick={() => {
            setStartChat(false);
          }}
        >
          Изменить данные чата
        </Button>
      </div>
      <ChatMessages messages={messages} />

      <SendMessageBlock
        newMessage={newMessage}
        sendMessage={async () => {
          await sendMessage({
            apiTokenInstance,
            idInstance,
            newMessage,
            phoneNumber,
            setMessages,
            setNewMessage,
          });
        }}
        setNewMessage={setNewMessage}
        disabled={phoneEdit}
      />
    </div>
  );
};
