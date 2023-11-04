import { Accordion } from '@/components';
import {
  Typography,
  Box,
  Grid,
  Tabs,
  Tab,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from '@mui/material';
import { useHome } from './hooks';
import { getPlayerByKey, sortData, sumScore } from './TopPlayers.utils';
import { LineChart } from './components';

const Home = () => {
  const {
    topPlayers,
    position,
    handleChangePosition,
    playerType,
    handleChangePlayer,
  } = useHome();

  const positions = [
    ...new Set(topPlayers.playerRounds.map((item) => item.player.positionId)),
  ];

  const playerTypes = [
    ...new Set(topPlayers.playerRounds.map((item) => item.player.playerTypeId)),
  ];

  return (
    <Box sx={{ padding: '20px' }}>
      <Box>
        <Typography variant="h5" textAlign={'center'}>
          Clasificación
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <Box sx={{ display: 'grid', justifyItems: 'center' }}>
            <Typography variant="h6">Grupo A</Typography>
            <List dense={true}>
              {topPlayers.tournamentGroups
                ?.filter((item) => item.name === 'A')
                .map((item) => (
                  <>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar alt={item.club.name} src={item.club.image} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={item.club.name}
                        // secondary={'Secondary text'}
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </>
                ))}
            </List>
          </Box>
          <Box sx={{ display: 'grid', justifyItems: 'center' }}>
            <Typography variant="h6">Grupo B</Typography>
            <List dense={true}>
              {topPlayers.tournamentGroups
                ?.filter((item) => item.name === 'B')
                .map((item) => (
                  <>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar alt={item.club.name} src={item.club.image} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={item.club.name}
                        // secondary={'Secondary text'}
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </>
                ))}
            </List>
          </Box>
        </Box>
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
