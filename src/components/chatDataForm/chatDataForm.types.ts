export interface ChatDataFormProps {
  handleSubmit: () => void;
  idInstance: string;
  setIdInstance: (value: React.SetStateAction<string>) => void;
  apiTokenInstance: string;
  setApiTokenInstance: (value: React.SetStateAction<string>) => void;
}
