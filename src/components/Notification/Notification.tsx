import { Alert, AlertColor, Snackbar } from '@mui/material';

type NotificationProps = {
  open: boolean;
  msg: string;
  severity: AlertColor | undefined;
  handleClose: () => void;
};

export const Notification: React.FC<NotificationProps> = ({
  open,
  msg,
  severity,
  handleClose,
}) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      autoHideDuration={1500}
      open={open}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={severity}>
        {msg}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
