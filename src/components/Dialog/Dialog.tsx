import Dialog from '@mui/material/Dialog';
import {AlertDialogProps} from './Dialog.types'

export default function AlertDialog({children, open, handleClose}: AlertDialogProps) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={(_, reason) => {
          if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {            
            handleClose()
          }
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {children}
      </Dialog>
    </div>
  );
}