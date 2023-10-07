import { Player } from '@/types';

export type HandleClose = () => void;

export type HandleOnCompleted = () => void;

export type UsePlayer = () => {
  headers: { key: string; name: string; type: string }[];
  rows: Player[];
  deletePlayer: () => void;
  updatePlayer: () => void;
  handleClickOpen: () => void;
  handleClose: HandleClose;
  open: boolean;
  handleCreate: () => void;
};

export type catalogueType = { clubs: any[], positions: any[], playerTypes: any[], clubCategories: any[] }

export type DataValues = {
  id: string
  name: string
  lastName?: string | undefined
  nickName?: string | undefined
  image: string
  playerTypeId: number,
  positionId: number,
  clubId: number,
}
