import { AppBar, Accordion } from '@/components';
import { Typography, Box, Grid, Tabs, Tab, Avatar } from '@mui/material';
import { useTopPlayers } from './useTopPlayers';
import { getPlayerByKey, sortData, sumScore } from './TopPlayers.utils';
import { PlayerRound } from '@/types';

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

  return (
    <>
      <AppBar />
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
              sumScore(
                filterCategory(topPlayers.playerRounds),
                'player.clubId',
              ),
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
              {position === 0 && (
                <Accordion
                  data={getPlayerByKey(
                    topPlayers.playerRounds,
                    'positionId',
                    1,
                    filter,
                  )}
                  category={'PT'}
                />
              )}
              {position === 1 && (
                <Accordion
                  data={getPlayerByKey(
                    topPlayers.playerRounds,
                    'positionId',
                    2,
                    filter,
                  )}
                  category={'DF'}
                />
              )}
              {position === 2 && (
                <Accordion
                  data={getPlayerByKey(
                    topPlayers.playerRounds,
                    'positionId',
                    3,
                    filter,
                  )}
                  category={'MC'}
                />
              )}
              {position === 3 && (
                <Accordion
                  data={getPlayerByKey(
                    topPlayers.playerRounds,
                    'positionId',
                    4,
                    filter,
                  )}
                  category={'DL'}
                />
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
              {playerType === 0 && (
                <Accordion
                  data={getPlayerByKey(
                    topPlayers.playerRounds,
                    'playerTypeId',
                    1,
                    filter,
                  )}
                  category={'DRAFT'}
                />
              )}
              {playerType === 1 && (
                <Accordion
                  data={getPlayerByKey(
                    topPlayers.playerRounds,
                    'playerTypeId',
                    2,
                    filter,
                  )}
                  category={'ONCE'}
                />
              )}
              {playerType === 2 && (
                <Accordion
                  data={getPlayerByKey(
                    topPlayers.playerRounds,
                    'playerTypeId',
                    3,
                    filter,
                  )}
                  category={'DOCE'}
                />
              )}
              {playerType === 3 && (
                <Accordion
                  data={getPlayerByKey(
                    topPlayers.playerRounds,
                    'playerTypeId',
                    4,
                    filter,
                  )}
                  category={'TRECE'}
                />
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default TopPlayers;
