export interface PhoneNumberProps {
  phoneEdit: boolean;
  phoneNumber: string;
  setPhoneNumber: (value: React.SetStateAction<string>) => void;
  setPhoneEdit: (value: React.SetStateAction<boolean>) => void;
}
