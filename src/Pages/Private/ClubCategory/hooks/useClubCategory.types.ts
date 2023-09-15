import { ClubCategory } from '@/types';

export type HandleClose = () => void;

export type HandleOnCompleted = () => void;

export type UseClubCategory = () => {
  headers: { key: string; name: string; type: string }[];
  rows: ClubCategory[];
  deleteClubCategory: () => void;
  updateClubCategory: () => void;
  handleClickOpen: () => void;
  handleClose: HandleClose;
  open: boolean;
  handleCreateCategory: () => void;
};
