import { FC, useEffect } from 'react';
import { Button, Input } from 'widgets';

import classNames from './phoneNumber.module.scss';
import { PhoneNumberProps } from './phoneNumber.types';

export const PhoneNumber: FC<PhoneNumberProps> = ({
  phoneEdit,
  phoneNumber,
  setPhoneEdit,
  setPhoneNumber,
}) => {
  useEffect(() => {
    if (!phoneNumber) setPhoneEdit(true);
  }, [phoneNumber]);

  const isPhoneEdit = phoneEdit;
  return (
    <div className={classNames.phoneWrapper}>
      {isPhoneEdit ? (
        <>
          <Input
            type="number"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            placeholder="Введите телефон с 79*"
          />
          <Button
            disabled={!phoneNumber}
            onClick={() => {
              setPhoneEdit(false);
            }}
          >
            подтвердить
          </Button>
        </>
      ) : (
        <>
          <span>{phoneNumber}</span>
          <Button
            onClick={() => {
              setPhoneEdit(true);
            }}
          >
            изменить
          </Button>
        </>
      )}
    </div>
  );
};
