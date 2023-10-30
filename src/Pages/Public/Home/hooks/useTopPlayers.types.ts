import {
  PlayerRound,
  ClubCategory,
} from '@/types';

export interface TopPlayers {
  position: number;
  playerType: number;
  handleChangePosition: (
    _event: React.SyntheticEvent,
    newValue: number,
  ) => void;
  handleChangePlayer: (_event: React.SyntheticEvent, newValue: number) => void;
  topPlayers: {
    playerRounds: PlayerRound[];
    clubCategories: ClubCategory[];
  };
}
