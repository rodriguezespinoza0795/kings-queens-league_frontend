import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import { AlertDialogProps } from './Dialog.types';

export default function AlertDialog({
  children,
  open,
  handleClose,
  title,
}: AlertDialogProps) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={(_, reason) => {
          if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
            handleClose();
          }
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <>
          <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
          <DialogContent>{children}</DialogContent>
        </>
      </Dialog>
    </div>
  );
}
