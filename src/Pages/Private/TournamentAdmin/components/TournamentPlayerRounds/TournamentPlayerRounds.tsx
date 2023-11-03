import {
  Box,
  Pagination,
  List,
  ListItem,
  ListItemButton,
  Avatar,
  Typography,
  Chip,
  TextField,
  Button,
  Grid,
  IconButton,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import {
  Player,
  TournamentRound,
  CreatePlayerRoundDocument,
  PlayerRoundsDocument,
  PlayerRound,
  Tournament,
  ClubPresident,
  DeletePlayerRoundDocument,
  UpdatePlayerRoundDocument,
} from '@/types';
import { useEffect, useState } from 'react';
import { get, has } from 'lodash';
import { useMutation, useLazyQuery } from '@apollo/client';

const TournamentPlayerRounds = ({
  data,
  players,
  tournamentData,
  clubPresidentsData,
}: {
  data: TournamentRound[] | undefined;
  players: Player[] | undefined;
  tournamentData: Tournament | undefined;
  clubPresidentsData: ClubPresident[] | undefined;
}) => {
  const [page, setPage] = useState(1);
  const [matchData, setMatchData] = useState<TournamentRound>();
  const [playersScore, setPlayersScore] = useState({});
  const [playerRounds, setPlayerRounds] = useState<PlayerRound[]>([]);
  const [disabled, setDisabled] = useState(true);

  const [getPlayerRoundsData] = useLazyQuery(PlayerRoundsDocument, {
    onCompleted: ({ playerRounds }) =>
      setDefaultData(playerRounds as PlayerRound[]),
    onError: (error) => console.log('errors', error),
  });

  const [fetch] = useMutation(CreatePlayerRoundDocument, {
    onCompleted: (result) => console.log('result', result),
    onError: (error) => console.log('errors', error),
  });

  const [fetchDelete] = useMutation(DeletePlayerRoundDocument, {
    onCompleted: (result) => console.log('result', result),
    onError: (error) => console.log('errors', error),
  });

  const [fetchUpdate] = useMutation(UpdatePlayerRoundDocument, {
    onCompleted: (result) => console.log('result', result),
    onError: (error) => console.log('errors', error),
  });

  const handleCreate = async (data: any) => {
    fetch({
      variables: {
        data: data,
      },
    });
  };

  const deleteScore = async (id: string) => {
    fetchDelete({
      variables: {
        Id: id,
      },
    });
  };

  const updateScore = async (id: string, score: number) => {
    fetchUpdate({
      variables: {
        Id: id,
        data: {
          score: score,
        },
      },
    });
  };

  const setDefaultData = (playerRounds: PlayerRound[]) => {
    setDisabled(true);
    if (playerRounds.length === 0) setDisabled(false);
    setPlayerRounds(playerRounds);
    setPlayersScore(
      playerRounds.reduce((obj, item) => {
        return {
          ...obj,
          [`${get(item, 'playerId')}`]: item?.score?.toString(),
        };
      }, {}),
    );
  };

  const getPlayerScoreData = (match: TournamentRound) => {
    setMatchData(match);
    getPlayerRoundsData({
      variables: {
        where: {
          roundId: {
            equals: parseInt(match.id, 10),
          },
          isActive: {
            equals: true,
          },
        },
      },
    });
  };

  useEffect(() => {
    if (data) {
      getPlayerScoreData(data[0]);
    }
  }, [data]);

  const rounds = [...new Set(data?.map((item) => item.round))];

  const getColor = (id: string) => {
    if (id === '1') return 'warning';
    if (id === '2') return 'primary';
    if (id === '3') return 'success';
    if (id === '4') return 'error';
  };

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination
          count={rounds.length}
          shape="rounded"
          onChange={(_, page) => setPage(page)}
        />
      </Box>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'auto 1fr' }}>
        <List>
          {data
            ?.filter((round) => round.round === page)
            ?.map((item) => (
              <ListItem disablePadding key={item.id}>
                <ListItemButton onClick={() => getPlayerScoreData(item)}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      justifySelf: 'flex-end',
                    }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src={item?.clubHome.image}
                      sx={{ width: 50, height: 50 }}
                    />
                  </Box>
                  <Typography align="center">VS</Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src={item?.clubAway.image}
                      sx={{ width: 50, height: 50 }}
                    />
                  </Box>
                </ListItemButton>
              </ListItem>
            ))}
          {tournamentData?.isActive === 1 && (
            <Button
              variant="contained"
              disabled={disabled}
              onClick={() =>
                handleCreate(
                  Object.entries(playersScore).map((player) => ({
                    score: parseInt(player[1] as string, 10),
                    roundId: parseInt(matchData?.id as string, 10),
                    playerId: parseInt(player[0], 10),
                  })),
                )
              }
            >
              Guardar
            </Button>
          )}
        </List>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  marginBottom: '20px',
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src={matchData?.clubHome?.image}
                  sx={{ width: 50, height: 50 }}
                />
                {matchData?.clubHome?.name}
              </Box>
              <Box
                sx={{
                  width: '100%',
                  display: 'grid',
                  gap: '10px',
                  justifyContent: 'center',
                }}
              >
                {players
                  ?.filter((team) => {
                    if (tournamentData?.clubCategoryId === 4) {
                      return clubPresidentsData
                        ?.find(
                          (item) =>
                            parseInt(item?.id, 10) ===
                            matchData?.clubHome.clubPresidentId,
                        )
                        ?.club?.map((value) => parseInt(value.id, 10))
                        .includes(team.clubId);
                    }
                    return team.clubId === matchData?.clubIdHome;
                  })
                  ?.filter(
                    (player) =>
                      (has(playersScore, player.id) &&
                        tournamentData?.isActive === 0) ||
                      tournamentData?.isActive === 1,
                  )
                  ?.sort((a, b) => a.positionId - b.positionId)
                  ?.map((player) => (
                    <Box
                      sx={{
                        display: 'grid',
                        gap: '5px',
                        gridTemplateColumns:
                          'min-content 1fr min-content min-content min-content',
                      }}
                      key={player.id}
                    >
                      <Avatar
                        alt="Remy Sharp"
                        src={player?.image}
                        sx={{ width: 50, height: 50 }}
                      />
                      <Box sx={{ display: 'grid' }}>
                        <Typography>{`${player?.name} ${player?.lastName}`}</Typography>
                        <Box sx={{ display: 'flex', gap: '10px' }}>
                          <Chip
                            label={player?.position?.name}
                            color={getColor(player?.position?.id)}
                          />
                          <Chip
                            label={player?.playerType?.name}
                            color={getColor(player?.playerType?.id)}
                          />
                        </Box>
                      </Box>
                      <TextField
                        label="Score"
                        variant="outlined"
                        disabled={tournamentData?.isActive === 0}
                        value={get(playersScore, player.id, '')}
                        sx={{ width: '70px' }}
                        onChange={(e) =>
                          setPlayersScore({
                            ...playersScore,
                            [player.id]: e.target.value,
                          })
                        }
                      />
                      <IconButton
                        aria-label="Edit"
                        sx={{ width: 50, height: 50 }}
                        onClick={() => {
                          const id = playerRounds.find(
                            (item) => item.playerId.toString() === player.id,
                          )?.id;
                          if (id)
                            updateScore(
                              id,
                              parseInt(get(playersScore, player.id, ''), 10),
                            );
                        }}
                      >
                        <Edit />
                      </IconButton>
                      <IconButton
                        aria-label="delete"
                        sx={{ width: 50, height: 50 }}
                        onClick={() => {
                          const id = playerRounds.find(
                            (item) => item.playerId.toString() === player.id,
                          )?.id;
                          if (id) deleteScore(id);
                        }}
                      >
                        <Delete />
                      </IconButton>
                    </Box>
                  ))}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  marginBottom: '20px',
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src={matchData?.clubAway?.image}
                  sx={{ width: 50, height: 50 }}
                />
                {matchData?.clubAway?.name}
              </Box>
              <Box
                sx={{
                  width: '100%',
                  display: 'grid',
                  gap: '10px',
                  justifyContent: 'center',
                }}
              >
                {players
                  ?.filter((team) => {
                    if (tournamentData?.clubCategoryId === 4) {
                      return clubPresidentsData
                        ?.find(
                          (item) =>
                            parseInt(item?.id, 10) ===
                            matchData?.clubAway.clubPresidentId,
                        )
                        ?.club?.map((value) => parseInt(value.id, 10))
                        .includes(team.clubId);
                    }
                    return team.clubId === matchData?.clubIdAway;
                  })
                  ?.filter(
                    (player) =>
                      (has(playersScore, player.id) &&
                        tournamentData?.isActive === 0) ||
                      tournamentData?.isActive === 1,
                  )
                  ?.sort((a, b) => a.positionId - b.positionId)
                  ?.map((player) => (
                    <Box
                      sx={{
                        display: 'grid',
                        gap: '5px',
                        gridTemplateColumns:
                          'min-content 1fr min-content min-content min-content',
                      }}
                      key={player.id}
                    >
                      <Avatar
                        alt="Remy Sharp"
                        src={player?.image}
                        sx={{ width: 50, height: 50 }}
                      />
                      <Box sx={{ display: 'grid' }}>
                        <Typography>{`${player?.name} ${player?.lastName}`}</Typography>
                        <Box sx={{ display: 'flex', gap: '10px' }}>
                          <Chip
                            label={player?.position?.name}
                            color={getColor(player?.position?.id)}
                          />
                          <Chip
                            label={player?.playerType?.name}
                            color={getColor(player?.playerType?.id)}
                          />
                        </Box>
                      </Box>
                      <TextField
                        label="Score"
                        disabled={tournamentData?.isActive === 0}
                        variant="outlined"
                        sx={{ width: '70px' }}
                        value={get(playersScore, player.id, '')}
                        onChange={(e) =>
                          setPlayersScore({
                            ...playersScore,
                            [player.id]: e.target.value,
                          })
                        }
                      />
                      <IconButton
                        aria-label="Edit"
                        sx={{ width: 50, height: 50 }}
                        onClick={() => {
                          const id = playerRounds.find(
                            (item) => item.playerId.toString() === player.id,
                          )?.id;
                          if (id)
                            updateScore(
                              id,
                              parseInt(get(playersScore, player.id, ''), 10),
                            );
                        }}
                      >
                        <Edit />
                      </IconButton>
                      <IconButton
                        aria-label="delete"
                        sx={{ width: 50, height: 50 }}
                        onClick={() => {
                          const id = playerRounds.find(
                            (item) => item.playerId.toString() === player.id,
                          )?.id;
                          if (id) deleteScore(id);
                        }}
                      >
                        <Delete />
                      </IconButton>
                    </Box>
                  ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default TournamentPlayerRounds;
