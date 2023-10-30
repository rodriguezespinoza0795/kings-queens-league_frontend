import { PlayerRound } from '@/types';
import { get } from 'lodash';

interface ObjSum {
  [key: string]: PlayerRoundScores;
}
interface PlayerRoundScores extends PlayerRound {
  roundScore: number[]
}

export const getPlayerByKey = (
  data: PlayerRound[],
  key: string,
  keyValue: number,
  category: number,
) => {

  if (category === 0) {
    const filtered = data.filter(({ player }) => get(player, key) === keyValue);
    const grouped = sumScore(filtered, 'playerId');
    const sorted = sortData(grouped);
    return getTopData(sorted);
  } else {
    const filtered = data.filter(({ player }) => get(player, key) === keyValue && player?.club.clubCategoryId === category);
    const grouped = sumScore(filtered, 'playerId');
    const sorted = sortData(grouped);
    return getTopData(sorted);
  }
};

export const sumScore = (data: PlayerRound[], key: string) => {
  var result: PlayerRoundScores[] = [];
  data.reduce((res: ObjSum, value) => {
    const keyName = get(value, key) as keyof typeof res;
    if (!res[keyName]) {
      res[keyName] = { ...value, score: 0, roundScore: [] };
      result.push(res[keyName]);
    }
    res[keyName].score += value.score;
    res[keyName].roundScore.push(value.score);
    return res;
  }, {});
  return result;
};

export const sortData = (data: PlayerRoundScores[]) => {
  return data.sort((a, b) => b.score - a.score);
};

export const getTopData = (data: PlayerRoundScores[]) => {
  return data.slice(0, 5);
};
