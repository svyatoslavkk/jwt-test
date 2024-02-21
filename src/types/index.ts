import { ReactElement } from "react";

export type IInput = {
  name: string;
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: ReactElement;
}

export type IForm = {
  username: string;
  password: string;
}