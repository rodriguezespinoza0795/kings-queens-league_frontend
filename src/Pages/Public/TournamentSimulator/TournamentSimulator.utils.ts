import { get } from 'lodash';
import { RoundMatch } from '@/types';
import { ObjSum } from './TournamentSimulator.types'

export const getSumScore = (data: RoundMatch[] | any[]) => {
  return data.reduce((res: ObjSum, value) => {
    const clubIdHome = get(value, 'clubIdHome', 0) as keyof typeof res;
    const clubIdAway = get(value, 'clubIdAway', 0) as keyof typeof res;
    if (res[clubIdHome]) {
      res[clubIdHome].points += value.clubHomePoints;
      res[clubIdHome].score += value.clubHomeScore - value.clubAwayScore;
    } else {
      res[clubIdHome] = {
        points: value.clubHomePoints,
        score: value.clubHomeScore - value.clubAwayScore,
      };
    }
    if (res[clubIdAway]) {
      res[clubIdAway].points += value.clubAwayPoint;
      res[clubIdAway].score += value.clubAwayScore - value.clubHomeScore;
    } else {
      res[clubIdAway] = {
        points: value.clubAwayPoint,
        score: value.clubAwayScore - value.clubHomeScore,
      };
    }
    return res;
  }, {});
};
