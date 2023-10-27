import { Club } from '@/types';

export type HandleClose = () => void;

export type HandleOnCompleted = () => void;

export type UseClub = () => {
  headers: { key: string; name: string; type: string }[];
  rows: Club[];
  deleteClub: () => void;
  updateClub: () => void;
  handleClickOpen: () => void;
  handleClose: HandleClose;
  open: boolean;
  handleCreate: () => void;
};
