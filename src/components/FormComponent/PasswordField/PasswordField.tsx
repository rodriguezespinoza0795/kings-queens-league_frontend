import { Controller } from 'react-hook-form';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
} from '@mui/material';
import { PasswordProps } from './passwordField.types';
import { usePasswordField } from './usePasswordField';

const PasswordFieldComponent = ({ control, errors }: PasswordProps) => {
  const { showPassword, handleClickShowPassword } = usePasswordField();
  return (
    <Controller
      name="password"
      control={control}
      rules={{
        required: 'Este campo es obligatorio',
      }}
      render={({ field: { onChange, value } }) => (
        <FormControl sx={{ width: '100%' }} variant="outlined">
          <InputLabel
            htmlFor="outlined-adornment-password"
            error={!!errors.password}
          >
            Password
          </InputLabel>
          <OutlinedInput
            id="password"
            type={showPassword ? 'text' : 'password'}
            onChange={onChange}
            value={value}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            error={!!errors.password}
          />
          <FormHelperText id="filled-weight-helper-text" error={true}>
            {errors.password?.message}
          </FormHelperText>
        </FormControl>
      )}
    />
  );
};

export default PasswordFieldComponent;
