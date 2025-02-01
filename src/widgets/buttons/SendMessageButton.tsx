import SendIcon from '@mui/icons-material/Send';
import { IconButton, IconButtonProps } from '@mui/material';
import { FC, memo } from 'react';

const SendMessageButtonComponent: FC<IconButtonProps> = (props) => {
  const customStyles = {
    color: 'rgb(209, 215, 219)',
  };

  return (
    <IconButton color="default" sx={customStyles} {...props}>
      <SendIcon />
    </IconButton>
  );
};

export const SendMessageButton = memo(SendMessageButtonComponent);
