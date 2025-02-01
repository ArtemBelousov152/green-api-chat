import { FC } from 'react';

import classNames from './input.module.scss';
import { InputProps } from './input.types';

export const Input: FC<InputProps> = ({ label, name, ...props }) => {
  return (
    <div className={classNames.formInput}>
      {label && <label htmlFor={name}>{label}</label>}
      <input {...props} name={name} />
    </div>
  );
};
