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
        },
        whereCategory: {
          isActive: {
            equals: true,
          },
        },
      },
    });
  }, []);

  const [filter, setFilter] = useState(0);

  const handleFilter = (value: number) => {
    if (value === filter) {
      setFilter(0);
    } else {
      setFilter(value);
    }
  };

  return {
    topPlayers,
    position,
    handleChangePosition,
    playerType,
    handleChangePlayer,
    handleFilter,
    filter,
  };
};
