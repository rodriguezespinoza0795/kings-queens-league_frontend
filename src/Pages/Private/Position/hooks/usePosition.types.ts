import { Position } from '@/types';

export type HandleClose = () => void;

export type HandleOnCompleted = () => void;

export type UsePosition = () => {
  headers: { key: string; name: string; type: string }[];
  rows: Position[];
  deletePosition: () => void;
  updatePosition: () => void;
  handleClickOpen: () => void;
  handleClose: HandleClose;
  open: boolean;
  handleCreatePosition: () => void;
};
