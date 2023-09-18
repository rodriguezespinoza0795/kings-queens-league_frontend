import { PlayerType } from '@/types';

export type HandleClose = () => void;

export type HandleOnCompleted = () => void;

export type UsePlayerType = () => {
  headers: { key: string; name: string; type: string }[];
  rows: PlayerType[];
  deletePlayerType: () => void;
  updatePlayerType: () => void;
  handleClickOpen: () => void;
  handleClose: HandleClose;
  open: boolean;
  handleCreatePlayerType: () => void;
};
