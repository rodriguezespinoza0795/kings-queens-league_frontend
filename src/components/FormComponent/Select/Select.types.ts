import { Control } from 'react-hook-form';

export type TextFieldProps = {
  control: Control<any>;
  errors: any;
  name: string
  label: string
  pattern?: any
};
