import { Button, DialogActions } from '@mui/material';
const DialogActionsComponent = ({
  handleClose,
}: {
  handleClose: () => void;
}) => {
  return (
    <DialogActions
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-around',
      }}
    >
      <Button onClick={handleClose} variant="outlined" color="error">
        Cancelar
      </Button>
      <Button type="submit" variant="contained">
        Aceptar
      </Button>
    </DialogActions>
  );
};

export default DialogActionsComponent;
