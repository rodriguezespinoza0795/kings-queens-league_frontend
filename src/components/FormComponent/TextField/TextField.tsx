import { Control } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

const TextFieldComponent = ({
  control,
  errors,
  name,
  label,
  pattern,
}: {
  control: Control<any>;
  errors: any;
  name: string;
  label: string;
  pattern?: any;
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: 'Este campo es obligatorio',
        pattern: {
          value: pattern,
          message: 'Formato de incorrecto',
        },
      }}
      render={({ field: { onChange, value } }) => (
        <TextField
          value={value}
          id={name}
          label={label}
          variant="outlined"
          onChange={onChange}
          fullWidth
          error={!!errors?.[name]?.message}
          helperText={errors?.[name]?.message}
        />
      )}
    />
  );
};

export default TextFieldComponent;
