import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import { TextFieldProps } from './textField.types';

const TextFieldComponent = ({ control, errors }: TextFieldProps) => {
  return (
    <Controller
      name="email"
      control={control}
      rules={{
        required: 'Este campo es obligatorio',
        pattern: {
          value:
            /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/,
          message: 'Formato de correo erróneo',
        },
      }}
      render={({ field: { onChange, value } }) => (
        <TextField
          value={value}
          id="email"
          label="Correo Electrónico"
          variant="outlined"
          onChange={onChange}
          fullWidth
          error={!!errors.email?.message}
          helperText={errors.email?.message}
        />
      )}
    />
  );
};

export default TextFieldComponent;
