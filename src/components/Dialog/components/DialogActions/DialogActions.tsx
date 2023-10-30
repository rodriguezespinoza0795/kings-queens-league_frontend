import { Button, DialogActions } from '@mui/material';
const DialogActionsComponent = ({
  handleClose,
  onSubmit,
}: {
  handleClose: () => void;
  onSubmit?: () => void;
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
      {onSubmit ? (
        <Button type="button" variant="contained" onClick={onSubmit}>
          Aceptar
        </Button>
      ) : (
        <Button type="submit" variant="contained">
          Aceptar
        </Button>
      )}
    </DialogActions>
  );
};

export default DialogActionsComponent;
