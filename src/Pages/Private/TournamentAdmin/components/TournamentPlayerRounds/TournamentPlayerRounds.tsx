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
} from '@mui/material';
import {
  Player,
  TournamentRound,
  CreatePlayerRoundDocument,
  PlayerRoundsDocument,
  PlayerRound,
} from '@/types';
import { useState } from 'react';
import { get } from 'lodash';
import { useMutation, useLazyQuery } from '@apollo/client';

const TournamentPlayerRounds = ({
  data,
  players,
}: {
  data: TournamentRound[] | undefined;
  players: Player[] | undefined;
}) => {
  const [page, setPage] = useState(1);
  const [matchData, setMatchData] = useState<TournamentRound>();
  const [playersScore, setPlayersScore] = useState({});
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

  const handleCreate = async (data: any) => {
    fetch({
      variables: {
        data: data,
      },
    });
  };

  const setDefaultData = (playerRounds: PlayerRound[]) => {
    setDisabled(true);
    if (playerRounds.length === 0) setDisabled(false);
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
        },
      },
    });
  };

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
        </List>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            justifyItems: 'center',
          }}
        >
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
                display: 'grid',
                gap: '10px',
                width: '100%',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                justifyItems: 'center',
              }}
            >
              {players
                ?.filter((team) => team.clubId === matchData?.clubIdHome)
                ?.map((player) => (
                  <Box
                    sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}
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
                      value={get(playersScore, player.id, '')}
                      sx={{ width: '70px' }}
                      onChange={(e) =>
                        setPlayersScore({
                          ...playersScore,
                          [player.id]: e.target.value,
                        })
                      }
                    />
                  </Box>
                ))}
            </Box>
          </Box>
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
                display: 'grid',
                gap: '10px',
                width: '100%',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                justifyItems: 'center',
              }}
            >
              {players
                ?.filter((team) => team.clubId === matchData?.clubIdAway)
                ?.map((player) => (
                  <Box
                    sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}
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
                      sx={{ width: '70px' }}
                      value={get(playersScore, player.id, '')}
                      onChange={(e) =>
                        setPlayersScore({
                          ...playersScore,
                          [player.id]: e.target.value,
                        })
                      }
                    />
                  </Box>
                ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TournamentPlayerRounds;
