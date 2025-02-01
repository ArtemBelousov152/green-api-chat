import { FC } from 'react';
import { Button, Input } from 'widgets';

import classNames from './chatDataForm.module.scss';
import { ChatDataFormProps } from './chatDataForm.types';

export const ChatDataForm: FC<ChatDataFormProps> = ({
  handleSubmit,
  idInstance,
  setIdInstance,
  apiTokenInstance,
  setApiTokenInstance,
}) => {
  return (
    <form className={classNames.form} action="" onSubmit={handleSubmit}>
      <h2>Введите учетные данные из системы GREEN-API</h2>
      <Input
        name="idInstance"
        type="text"
        onChange={(e) => {
          setIdInstance(e.target.value);
        }}
        value={idInstance}
        label="idInstance"
      />
      <Input
        name="apiTokenInstance"
        type="text"
        onChange={(e) => {
          setApiTokenInstance(e.target.value);
        }}
        value={apiTokenInstance}
        label="apiTokenInstance"
      />
      <Button type="submit">Подтвердить</Button>
    </form>
  );
};
