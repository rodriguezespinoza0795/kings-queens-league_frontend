import { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { TopPlayers } from './useTopPlayers.types';
import {
  PlayerRound,
  TopPlayersCataloguesDocument,
  ClubCategory,
} from '@/types';

export const useTopPlayers = (): TopPlayers => {
  const [topPlayers, setTopPlayers] = useState<{
    playerRounds: PlayerRound[];
    clubCategories: ClubCategory[];
  }>({ playerRounds: [], clubCategories: [] });

  const [position, setPosition] = useState(0);
  const handleChangePosition = (
    _event: React.SyntheticEvent,
    newValue: number,
  ) => {
    setPosition(newValue);
  };

  const [playerType, setPlayerType] = useState(0);
  const handleChangePlayer = (
    _event: React.SyntheticEvent,
    newValue: number,
  ) => {
    setPlayerType(newValue);
  };

  const [topPlayersData] = useLazyQuery(TopPlayersCataloguesDocument, {
    onCompleted: (data) =>
      setTopPlayers(
        data as {
          playerRounds: PlayerRound[];
          clubCategories: ClubCategory[];
        },
      ),
    onError: (error) => console.log('errors', error),
  });

  useEffect(() => {
    topPlayersData({
      variables: {
        where: {
          isActive: {
            equals: true,
          },
          round: {
            tournamentId: {
              equals: 3,
            },
          },
        },
        whereCategory: {
          isActive: {
            equals: true,
          },
        },
      },
    });
  }, []);

  return {
    topPlayers,
    position,
    handleChangePosition,
    playerType,
    handleChangePlayer,
  };
};
