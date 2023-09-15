export type AlertDialogProps = {
  children: React.ReactNode;
  open: boolean;
  handleClose: () => void;
  title: string
};
