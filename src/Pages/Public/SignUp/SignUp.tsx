import { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Link,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormHelperText,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';

const defaultValues = {
  username: '',
  email: '',
  emailConfirm: '',
  password: '',
};

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [passValid1, setPassValid1] = useState(false);
  const [passValid2, setPassValid2] = useState(false);
  const [passValid3, setPassValid3] = useState(false);
  const {
    control,
    formState: { errors },
    setError,
    handleSubmit,
  } = useForm({ defaultValues });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const onSubmit = (data: any) => {
    if (data.email !== data.emailConfirm) {
      setError('emailConfirm', {
        type: 'custom',
        message: 'El correo no coincide',
      });
    } else {
      console.log('data', data);
    }
  };

  const validPass = (pass: any, onChange: any) => {
    const res1 = /^.{12,32}$/;
    const res2 = /^(?=.*[A-Z])(?=.*[a-z]).*/;
    const res3 = /^(?=.*[0-9])(?=.*[!@#$%^&*(),.?"_{}|<>]).+$/;

    setPassValid1(res1.test(pass));
    setPassValid2(res2.test(pass));
    setPassValid3(res3.test(pass));
    onChange(pass);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: 'grid',
        placeItems: 'center',
        padding: '25px',
      }}
    >
      <Paper
        elevation={2}
        sx={{
          display: 'grid',
          padding: '50px',
          minWidth: '350px',
          gap: '10px',
          maxWidth: '500px',
        }}
      >
        <Typography textAlign="center" variant="h6">
          Regístrate
        </Typography>
        <Controller
          name="username"
          control={control}
          rules={{
            required: 'Este campo es obligatorio',
            pattern: {
              value: /^[A-Za-z0-9]{5,}$/,
              message: 'Formato de nombre de usuario erróneo',
            },
          }}
          render={({ field: { onChange, value } }) => (
            <TextField
              value={value}
              id="username"
              label="Nombre de usuario"
              variant="outlined"
              onChange={onChange}
              fullWidth
              error={!!errors.username?.message}
              helperText={errors.username?.message}
            />
          )}
        />
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
        <Controller
          name="emailConfirm"
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
              id="emailConfirm"
              label="Confirma tu correo electrónico"
              variant="outlined"
              onChange={onChange}
              fullWidth
              error={!!errors.emailConfirm?.message}
              helperText={errors.emailConfirm?.message}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{
            required: 'Este campo es obligatorio',
            validate: {
              valid1: (value) => /^.{12,32}$/.test(value),
              valid2: (value) => /^(?=.*[A-Z])(?=.*[a-z]).*/.test(value),
              valid3: (value) =>
                /^(?=.*[0-9])(?=.*[!@#$%^&*(),.?"_{}|<>]).+$/.test(value),
            },
          }}
          render={({ field: { onChange, value } }) => (
            <FormControl sx={{ width: '100%' }} variant="outlined">
              <InputLabel
                htmlFor="outlined-adornment-password"
                error={!!errors.password}
              >
                Captura tu contraseña
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                onChange={(e) => validPass(e.target.value, onChange)}
                value={value}
                label="Captura tu contraseña"
                error={!!errors.password}
              />
              <FormHelperText id="filled-weight-helper-text" error={true}>
                {errors.password?.message}
              </FormHelperText>
            </FormControl>
          )}
        />

        <FormControl component="fieldset" variant="standard">
          Tu contraseña debe de incluir lo siguiente:
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={passValid1}
                  name="gilad"
                  disableRipple
                  sx={{ paddingY: '0px' }}
                />
              }
              label={
                <Typography variant="subtitle2">12-32 caracteres</Typography>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={passValid2}
                  name="jason"
                  disableRipple
                  sx={{ paddingY: '0px' }}
                />
              }
              label={
                <Typography variant="subtitle2">
                  Mayúsculas y minúsculas
                </Typography>
              }
              sx={{ fontSize: '0.5rem' }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={passValid3}
                  name="antoine"
                  disableRipple
                  sx={{ paddingY: '0px' }}
                />
              }
              label={
                <Typography variant="subtitle2">
                  Por lo menos un número y un caracter especial
                </Typography>
              }
            />
          </FormGroup>
        </FormControl>
        <Button variant="contained" fullWidth type="submit">
          Continuar
        </Button>
        <Link
          underline="hover"
          sx={{ textAlign: 'center' }}
          color="black"
          variant="body2"
          onClick={() => navigate('/login')}
        >
          Ya tengo una cuenta
          <span style={{ color: 'red' }}> Iniciar sesión</span>
        </Link>
      </Paper>
    </Box>
  );
};

export default SignUp;
