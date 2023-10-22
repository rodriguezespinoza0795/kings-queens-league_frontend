import { Accordion } from '@/components';
import { Typography, Box, Grid, Tabs, Tab, Avatar } from '@mui/material';
import { useTopPlayers } from './hooks';
import { getPlayerByKey, sortData, sumScore } from './TopPlayers.utils';
import { PlayerRound } from '@/types';
import { LineChart } from './components';

const TopPlayers = () => {
  const {
    topPlayers,
    position,
    handleChangePosition,
    playerType,
    handleChangePlayer,
    handleFilter,
    filter,
  } = useTopPlayers();

  const filterCategory = (data: PlayerRound[]) => {
    if (filter === 0) return data;
    return data.filter((item) => item.player?.club.clubCategoryId === filter);
  };

  const positions = [
    ...new Set(topPlayers.playerRounds.map((item) => item.player.positionId)),
  ];

  const playerTypes = [
    ...new Set(topPlayers.playerRounds.map((item) => item.player.playerTypeId)),
  ];

  return (
    <Box sx={{ padding: '20px' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography>Filtrar por:</Typography>
          {topPlayers?.clubCategories?.map((item) => (
            <Avatar
              key={item.id}
              alt={item.name}
              src={item.image}
              onClick={() => handleFilter(parseInt(item.id, 10))}
            />
          ))}
        </Box>
        <Typography variant="h6">Mejores Equipos</Typography>
        <Box
          sx={{
            display: 'flex',
            flexFlow: 'wrap',
            justifyContent: 'center',
            gap: '30px',
          }}
        >
          {sortData(
            sumScore(filterCategory(topPlayers.playerRounds), 'player.clubId'),
          )?.map((player) => (
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
          ))}
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
                        filter,
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
                        filter,
                      )}
                      category={pt.toString()}
                    />
                  ),
              )}
          </Box>
        </Grid>
      </Grid>
      <LineChart
        dataList={topPlayers.playerRounds.filter(
          (item) => item.player?.club.clubCategoryId === filter,
        )}
      />
    </Box>
  );
};

export default TopPlayers;
