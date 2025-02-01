import { ButtonProps, Button as MaterialButton } from '@mui/material';
import { FC, memo } from 'react';

const ButtonComponent: FC<ButtonProps> = (props) => {
  const customStyles = {
    color: 'rgb(209, 215, 219)',
  };
  return (
    <MaterialButton
      variant="outlined"
      color="inherit"
      sx={customStyles}
      {...props}
    />
  );
};

export const Button = memo(ButtonComponent);
