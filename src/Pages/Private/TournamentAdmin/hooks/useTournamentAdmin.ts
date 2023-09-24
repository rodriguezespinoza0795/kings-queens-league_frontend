import { useEffect } from 'react'
import { useLazyQuery } from '@apollo/client';
import {
  TournamentDocument,
  ClubsDocument,
  Tournament,
  Club,
  TournamentGroupsDocument,
  TournamentGroup,
} from '@/types';
import { useState } from 'react';

export const useTournamentAdmin = (Id: string) => {
  const [tournamentData, setTourmentData] = useState<Tournament>()
  const [clubsData, setClubstData] = useState<Club[]>()
  const [tournamentGroupData, setTournamentGroupData] = useState<number[][]>()

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
          tournamentId: {
            equals: parseInt(Id, 10)
          }
        }
      },
    });
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
    tournamentGroupData,
    getGroups,
  };
};
