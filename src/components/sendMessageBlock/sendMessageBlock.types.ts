export interface SendMessageBlockProps {
  newMessage: string;
  sendMessage: () => Promise<void>;
  setNewMessage: React.Dispatch<React.SetStateAction<string>>;
  disabled?: boolean;
}
