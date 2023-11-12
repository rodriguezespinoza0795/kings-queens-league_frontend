import { Accordion } from '@/components';
import {
  Typography,
  Box,
  Grid,
  Tabs,
  Tab,
  Avatar,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from '@mui/material';
import { useHome } from './hooks';
import { getPlayerByKey, sortData, sumScore } from './TopPlayers.utils';
import { LineChart } from './components';
import { get } from 'lodash';
import { RoundMatch } from '@/types';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const {
    topPlayers,
    position,
    handleChangePosition,
    playerType,
    handleChangePlayer,
  } = useHome();
  const navigate = useNavigate();

  const positions = [
    ...new Set(topPlayers.playerRounds.map((item) => item.player.positionId)),
  ];

  const playerTypes = [
    ...new Set(topPlayers.playerRounds.map((item) => item.player.playerTypeId)),
  ];

  const roundMatches = topPlayers.roundMatches.map((item) => {
    const round = topPlayers.tournamentRounds.find(
      (value) => parseInt(value.id) === item.roundId,
    );
    return {
      ...item,
      clubIdAway: round?.clubIdAway,
      clubIdHome: round?.clubIdHome,
    };
  });

  type ObjSum = {
    [key: number]: { points: number; score: number };
  };

  const getSumScore = (data: RoundMatch[]) => {
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

  const scores = getSumScore(roundMatches);

  return (
    <Box sx={{ padding: '20px' }}>
      <Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h5" textAlign={'center'}>
            Clasificación
          </Typography>
          <Button
            variant="outlined"
            onClick={() => navigate('/tournament-simulator')}
          >
            Simular Torneo
          </Button>
        </Box>
        <Grid
          container
          sx={{
            justifyContent: 'space-evenly',
            paddingY: '10px',
          }}
        >
          <Grid item md={6} lg={6} sx={{ justifyItems: 'center' }}>
            <Typography variant="h6" textAlign={'center'}>
              Grupo A
            </Typography>
            <Table
              size="small"
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <TableBody>
                {topPlayers.tournamentGroups
                  ?.filter((item) => item.name === 'A')
                  .map((item) => ({ ...item, ...scores[item.clubId] }))
                  .sort((a, b) => {
                    if (b.points < a.points) return -1;
                    if (a.points > b.points) return 1;
                    if (b.score < a.score) return -1;
                    if (a.score > b.score) return 1;
                    return 0;
                  })
                  .map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <Avatar alt={item.club.name} src={item.club.image} />
                      </TableCell>
                      <TableCell>{item.club.name}</TableCell>
                      <TableCell>{item.points}</TableCell>
                      <TableCell>{item.score}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </Grid>
          <Grid item md={6} lg={6} sx={{ justifyItems: 'center' }}>
            <Typography variant="h6" textAlign={'center'}>
              Grupo B
            </Typography>
            <Table
              size="small"
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <TableBody>
                {topPlayers.tournamentGroups
                  ?.filter((item) => item.name === 'B')
                  .map((item) => ({ ...item, ...scores[item.clubId] }))
                  .sort((a, b) => {
                    if (b.points < a.points) return -1;
                    if (a.points > b.points) return 1;
                    if (b.score < a.score) return -1;
                    if (a.score > b.score) return 1;
                    return 0;
                  })
                  .map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <Avatar alt={item.club.name} src={item.club.image} />
                      </TableCell>
                      <TableCell>{item.club.name}</TableCell>
                      <TableCell>{item.points}</TableCell>
                      <TableCell>{item.score}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <Typography variant="h6">Mejores Equipos</Typography>
        <Box
          sx={{
            display: 'flex',
            flexFlow: 'wrap',
            justifyContent: 'center',
            gap: '30px',
          }}
        >
          {sortData(sumScore(topPlayers.playerRounds, 'player.clubId'))?.map(
            (player) => (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
                key={player?.player?.clubId}
              >
                <Avatar alt="Remy Sharp" src={player?.player?.club?.image} />
                <Typography>{`${player?.score} pts`}</Typography>
              </Box>
            ),
          )}
        </Box>
      </Box>
      <Typography variant="h6" textAlign="center" sx={{ paddingTop: '30px' }}>
        Mejores Jugadores
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Typography>Por Posición</Typography>
            <Tabs
              value={position}
              variant="scrollable"
              scrollButtons="auto"
              onChange={handleChangePosition}
              aria-label="basic tabs example"
            >
              <Tab label="PT" />
              <Tab label="DF" />
              <Tab label="MC" />
              <Tab label="DL" />
            </Tabs>
            {positions
              .sort()
              .map(
                (pos) =>
                  position === pos - 1 && (
                    <Accordion
                      key={pos}
                      data={getPlayerByKey(
                        topPlayers.playerRounds,
                        'positionId',
                        pos,
                        0,
                      )}
                      category={pos.toString()}
                    />
                  ),
              )}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Typography>Por Tipo de jugador</Typography>
            <Tabs
              value={playerType}
              onChange={handleChangePlayer}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="basic tabs example"
            >
              <Tab label="Draft" />
              <Tab label="11" />
              <Tab label="12" />
              <Tab label="13" />
            </Tabs>
            {playerTypes
              .sort()
              .map(
                (pt) =>
                  playerType === pt - 1 && (
                    <Accordion
                      key={pt}
                      data={getPlayerByKey(
                        topPlayers.playerRounds,
                        'playerTypeId',
                        pt,
                        0,
                      )}
                      category={pt.toString()}
                    />
                  ),
              )}
          </Box>
        </Grid>
      </Grid>
      <LineChart dataList={topPlayers.playerRounds} />
    </Box>
  );
};

export default Home;
