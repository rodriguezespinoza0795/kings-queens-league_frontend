import { PlayerRound } from '@/types';

export interface ObjSum {
  [key: string]: PlayerRoundScores;
}

export interface ObjNumber {
  [key: number]: number;
}

export interface PlayerRoundScores extends PlayerRound {
  roundScore: ObjNumber;
}
