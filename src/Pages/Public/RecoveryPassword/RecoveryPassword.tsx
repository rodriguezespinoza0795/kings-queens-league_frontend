import { Box, Paper, Typography, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const RecoveryPassword = () => {
  const navigate = useNavigate();
  return (
    <Box
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
          maxWidth: '500px',
        }}
      >
        <Typography textAlign="center" variant="h6">
          Olvidaste tu contraseña
        </Typography>
        <Typography textAlign="center" variant="subtitle2">
          Ingresa tu correo electrónico para que recibas un código y puedas
          restablecer tu contraseña
        </Typography>
        <TextField label="Correo Electrónico" variant="outlined" fullWidth />
        <Box sx={{ display: 'flex', gap: '10px' }}>
          <Button
            variant="outlined"
            fullWidth
            onClick={() => navigate('/login')}
          >
            Cancelar
          </Button>
          <Button variant="contained" fullWidth>
            Enviar
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default RecoveryPassword;
