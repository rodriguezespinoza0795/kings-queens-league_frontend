import { Box, Paper, Typography, Button, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { TextField, PasswordField } from '@/components';
import { useLogin } from './useLogin';
import { emailPattern } from './login.utils';

const Login = () => {
  const navigate = useNavigate();
  const { onSubmit, defaultValues } = useLogin();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues });

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
          minWidth: '300px',
          gap: '10px',
        }}
      >
        <Typography textAlign="center" variant="h6">
          Inicia Sesión
        </Typography>
        <TextField
          control={control}
          errors={errors}
          label="Correo Electrónico"
          name="email"
          pattern={emailPattern}
        />
        <PasswordField control={control} errors={errors} />
        <Link
          underline="hover"
          sx={{ textAlign: 'end' }}
          color="black"
          variant="body2"
          onClick={() => navigate('/recovery-password')}
        >
          Olvidaste tu contraseña
        </Link>
        <Button variant="contained" fullWidth type="submit">
          Iniciar Sesión
        </Button>
        <Link
          underline="hover"
          sx={{ textAlign: 'end' }}
          color="black"
          variant="body2"
          onClick={() => navigate('/sign-up')}
        >
          ¿Aún no tienes una cuenta?
          <span style={{ color: 'red' }}> Regístrate</span>
        </Link>
      </Paper>
    </Box>
  );
};

export default Login;
