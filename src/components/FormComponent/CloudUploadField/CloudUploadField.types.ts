import { Control } from 'react-hook-form';

export type CloudUploadFieldProps = {
  control: Control<any>;
  errors: any;
  watch: any;
  defaultImage: string
};
