import { useEffect } from 'react'
import { useLazyQuery, useMutation } from '@apollo/client';
import {
  TournamentDocument,
  ClubsDocument,
  Tournament,
  Club,
  TournamentGroupsDocument,
  TournamentGroup,
  TournamentRoundsDocument,
  TournamentRound,
  CreateTournamentRoundDocument,
  PlayersDocument,
  Player
} from '@/types';
import { useState } from 'react';

export const useTournamentAdmin = (Id: string) => {
  const [tournamentData, setTourmentData] = useState<Tournament>()
  const [clubsData, setClubstData] = useState<Club[]>()
  const [tournamentGroupData, setTournamentGroupData] = useState<number[][]>()
  const [tournamentRoundsData, setTournamentRoundsData] = useState<TournamentRound[]>()
  const [players, setPlayers] = useState<Player[]>()

  const [fetch] = useMutation(CreateTournamentRoundDocument, {
    onCompleted: () => refetchData(),
    onError: (error) => console.log('errors', error),
  });

  const [getTournamentData] = useLazyQuery(TournamentDocument, {
    onCompleted: ({ tournament }) => getCompleteData(tournament as Tournament),
    onError: (error) => console.log('errors', error),
  });

  const [getclubsData] = useLazyQuery(ClubsDocument, {
    onCompleted: ({ clubs }) => setClubstData(clubs as Club[]),
    onError: (error) => console.log('errors', error),
  });

  const [getClubGroupData] = useLazyQuery(TournamentGroupsDocument, {
    onCompleted: ({ tournamentGroups }) => setTournamentGroupData(getGroups(tournamentGroups as TournamentGroup[])),
    onError: (error) => console.log('errors', error),
  });

  const [getPlayersData] = useLazyQuery(PlayersDocument, {
    onCompleted: ({ players }) => setPlayers(players as Player[]),
    onError: (error) => console.log('errors', error),
  });

  const [getClubRoundsData, { refetch }] = useLazyQuery(TournamentRoundsDocument, {
    onCompleted: ({ tournamentRounds }) => setTournamentRoundsData(tournamentRounds as TournamentRound[]),
    onError: (error) => console.log('errors', error),
  });

  const refetchData = async () => {
    const {
      data: { tournamentRounds },
    } = await refetch();
    setTournamentRoundsData(tournamentRounds as TournamentRound[]);
  };

  const getCompleteData = async (tournament: Tournament) => {
    setTourmentData(tournament)
    await getclubsData({
      variables: {
        where: {
          isActive: {
            equals: true
          },
          clubCategoryId: {
            equals: parseInt(Id, 10)
          }
        }
      },
    });
    await getClubGroupData({
      variables: {
        where: {
          isActive: {
            equals: true
          },
          tournamentId: {
            equals: parseInt(Id, 10)
          }
        }
      },
    });
    await getClubRoundsData({
      variables: {
        where: {
          isActive: {
            equals: true
          },
          tournamentId: {
            equals: parseInt(Id, 10)
          }
        }
      },
    })
    await getPlayersData({
      variables: {
        where: {
          isActive: {
            equals: true
          },
        }
      },
    })
  }

  const getGroups = (data: TournamentGroup[]) => {
    return [
      data
        ?.filter((item) => item.name === 'A')
        .map((item) => item.clubId),
      data
        ?.filter((item) => item.name === 'B')
        .map((item) => item.clubId)]

  }

  const handleCreate = async (data: any) => {
    fetch({
      variables: {
        data: data,
      },
    });
  }

  useEffect(() => {
    getTournamentData({
      variables: {
        tournamentId: Id,
      },
    });
  }, []);

  return {
    tournamentData,
    clubsData,
    players,
    tournamentGroupData,
    tournamentRoundsData,
    handleCreate
  };
};
