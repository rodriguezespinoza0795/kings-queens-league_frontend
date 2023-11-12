import { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import {
  TournamentsDocument,
  Tournament,
  TournamentSimulatorDocument,
  TournamentGroup,
} from '@/types';
import { CatalogueType, ObjSum } from './TournamentSimulator.types';
import { getSumScore } from './TournamentSimulator.utils';
import { DropResult } from 'react-beautiful-dnd';

export const useTournamentSimulator = () => {
  const [tournaments, setTournaments] = useState<Tournament[] | unknown[]>([]);
  const [catalogues, setCatalogues] = useState<CatalogueType>({
    tournamentGroups: [],
    roundMatches: [],
    tournamentRounds: [],
  });

  const [orderedList, setOrderedList] = useState([]);
  const [scores, setScores] = useState<ObjSum>({});
  const [getCatalogues, { loading }] = useLazyQuery(
    TournamentSimulatorDocument,
    {
      onCompleted: (data) => cataloguesOnComplete(data),
      onError: (error) => console.log('errors', error),
    },
  );
  const [getTournament] = useLazyQuery(TournamentsDocument, {
    onCompleted: ({ tournaments }) => tournamentOnComplete(tournaments),
    onError: (error) => console.log('errors', error),
  });

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

  const getTournamentSimulatorData = (ids: number[]) => {
    getCatalogues({
      variables: {
        whereTournamentGroup: {
          isActive: {
            equals: true,
          },
          tournamentId: {
            in: ids,
          },
        },
        whereRoundMatches: {
          round: {
            tournamentId: {
              in: ids,
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
            in: ids,
          },
        },
      },
    });
  };

  const tournamentOnComplete = (tournaments: TournamentGroup[] | any[]) => {
    if (tournaments) {
      setTournaments(tournaments);
      const ids = tournaments.map((item) => parseInt(item?.id as string));
      getTournamentSimulatorData(ids);
    }
  };

  const cataloguesOnComplete = (data: CatalogueType) => {
    setCatalogues(data);
    const roundMatches = data.roundMatches.map((item) => {
      const round = data.tournamentRounds.find(
        (value) => parseInt(value.id) === item.roundId,
      );
      return {
        ...item,
        clubIdAway: round?.clubIdAway,
        clubIdHome: round?.clubIdHome,
      };
    });
    let favoriteTeam = localStorage.getItem('favoriteTeam');
    setOrderedList(
      favoriteTeam ? JSON.parse(favoriteTeam) : data.tournamentGroups,
    );
    setScores(getSumScore(roundMatches));
  };

  const completeRounds = () => {
    const list = orderedList.map((item: TournamentGroup) => item.clubId);
    const roundMatches = catalogues.roundMatches.map((item) => {
      const round = catalogues.tournamentRounds.find(
        (value) => parseInt(value.id) === item.roundId,
      );
      return {
        ...item,
        clubIdAway: round?.clubIdAway,
        clubIdHome: round?.clubIdHome,
      };
    });
    const newScores = catalogues.tournamentRounds.map((round) => ({
      id: round.id,
      roundId: parseInt(round.id, 10),
      clubHomeScore:
        list.indexOf(round.clubIdHome) < list.indexOf(round.clubIdAway) ? 1 : 0,
      clubHomeScoreDraw: null,
      clubHomePoints:
        list.indexOf(round.clubIdHome) < list.indexOf(round.clubIdAway) ? 3 : 0,
      clubAwayScore:
        list.indexOf(round.clubIdAway) < list.indexOf(round.clubIdHome) ? 1 : 0,
      clubAwayScoreDraw: null,
      clubAwayPoint:
        list.indexOf(round.clubIdAway) < list.indexOf(round.clubIdHome) ? 3 : 0,
      clubIdAway: round.clubIdAway,
      clubIdHome: round.clubIdHome,
      isActive: 1,
    }));

    const newResults = roundMatches.map((item) => item.roundId);
    const newRoundMatches = newScores.filter(
      (value) => !newResults.includes(value.roundId),
    );

    setScores(getSumScore([...roundMatches, ...newRoundMatches]));
  };

  function handleOnDragEnd(result: DropResult) {
    if (!result.destination) return;

    const items = Array.from(orderedList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    localStorage.setItem('favoriteTeam', JSON.stringify(items));
    setOrderedList(items);
  }

  return {
    tournaments,
    catalogues,
    scores,
    loading,
    orderedList,
    handleOnDragEnd,
    completeRounds,
  };
};
