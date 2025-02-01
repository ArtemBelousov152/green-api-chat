import axios from 'axios';

import { ReceiveMessagev, SendMessage } from './messages.types';

// Получилось немного костыльно. Можно было вынести общие данные в redux, но как будто не такое большое приложение, чтобы это делать
export const sendMessage = async ({
  idInstance,
  apiTokenInstance,
  newMessage,
  phoneNumber,
  setMessages,
  setNewMessage,
}: SendMessage) => {
  if (newMessage.trim() === '') return;
  const url = `https://api.green-api.com/waInstance${idInstance}/SendMessage/${apiTokenInstance}`;

  const data = {
    chatId: `${phoneNumber}@c.us`,
    message: newMessage,
  };

  try {
    await axios.post(url, data);

    setMessages((currentMessages) =>
      currentMessages.concat({ message: newMessage, sendByMe: true })
    );

    setNewMessage('');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('error sending message', error);
  }
};

export const receiveMessagev = async ({
  startChat,
  idInstance,
  apiTokenInstance,
  setMessages,
}: ReceiveMessagev) => {
  const receiveMessagevArgs = {
    startChat,
    idInstance,
    apiTokenInstance,
    setMessages,
  };
  const sendUrl = `https://api.green-api.com/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`;
  if (!startChat) return;
  try {
    const response = await axios.get(sendUrl);

    if (response.status === 502) {
      await receiveMessagev(receiveMessagevArgs);
    } else {
      const message =
        response.data?.body?.messageData?.textMessageData?.textMessage;

      if (message)
        setMessages((currentMessages) =>
          currentMessages.concat({
            message,
            sendByMe: false,
          })
        );

      if (response.data?.receiptId)
        await axios.delete(
          `https://api.green-api.com/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${response.data.receiptId}`
        );

      await receiveMessagev(receiveMessagevArgs);
    }
  } catch (error) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // eslint-disable-next-line no-console
    console.error('error sending message', error);
    await receiveMessagev(receiveMessagevArgs);
  }
};
