export interface InputType {
  id: number;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  valueSet: React.Dispatch<React.SetStateAction<string>>;
}
