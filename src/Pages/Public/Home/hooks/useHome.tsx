import { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { TopPlayers } from './useTopPlayers.types';
import {
  PlayerRound,
  TopPlayersCataloguesDocument,
  ClubCategory,
  TournamentsDocument,
  TournamentGroup,
  RoundMatch,
  TournamentRound,
} from '@/types';

export const useHome = (): TopPlayers => {
  const [topPlayers, setTopPlayers] = useState<{
    playerRounds: PlayerRound[];
    clubCategories: ClubCategory[];
    tournamentGroups: TournamentGroup[];
    roundMatches: RoundMatch[];
    tournamentRounds: TournamentRound[];
  }>({
    playerRounds: [],
    clubCategories: [],
    tournamentGroups: [],
    roundMatches: [],
    tournamentRounds: [],
  });

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
          tournamentGroups: TournamentGroup[];
          roundMatches: RoundMatch[];
          tournamentRounds: TournamentRound[];
        },
      ),
    onError: (error) => console.log('errors', error),
  });

  const [getTournament] = useLazyQuery(TournamentsDocument, {
    onCompleted: ({ tournaments }) => {
      if (tournaments[0]) getTopPlayersData(tournaments[0].id);
    },
    onError: (error) => console.log('errors', error),
  });

  const getTopPlayersData = (id: string) => {
    topPlayersData({
      variables: {
        where: {
          isActive: {
            equals: true,
          },
          round: {
            tournamentId: {
              equals: parseInt(id, 10),
            },
          },
        },
        whereCategory: {
          isActive: {
            equals: true,
          },
        },
        whereTournamentGroup: {
          isActive: {
            equals: true,
          },
          tournamentId: {
            equals: parseInt(id, 10),
          },
        },
        whereRoundMatches: {
          round: {
            tournamentId: {
              equals: parseInt(id, 10),
            },
            isActive: {
              equals: true,
            },
          },
        },
        whereTournamentRounds: {
          isActive: {
            equals: true,
          },
          tournamentId: {
            equals: parseInt(id, 10),
          },
        },
      },
    });
  };

  useEffect(() => {
    getTournament({
      variables: {
        where: {
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
