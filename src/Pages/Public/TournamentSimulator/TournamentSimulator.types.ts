import { TournamentGroup, RoundMatch, TournamentRound } from '@/types';

export type ObjSum = {
  [key: number]: { points: number; score: number };
};

export type CatalogueType = {
  tournamentGroups: TournamentGroup[],
  roundMatches: RoundMatch[],
  tournamentRounds: TournamentRound[],
} | {
  tournamentGroups: any[],
  roundMatches: any[],
  tournamentRounds: any[],
};
