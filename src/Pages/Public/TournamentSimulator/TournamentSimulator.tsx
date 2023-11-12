import { Grid, Box } from '@mui/material';
import { useTournamentSimulator } from './useTournamentSimulator';
import Leaderboard from './Leaderboard';
import FavoriteTeam from './FavoriteTeam';
import RoundMatches from './RoundMatches';

const TournamentSimulator = () => {
  const {
    catalogues,
    scores,
    loading,
    orderedList,
    handleOnDragEnd,
    completeRounds,
  } = useTournamentSimulator();

  return (
    <>
      <Grid
        container
        sx={{
          justifyContent: 'space-evenly',
          paddingY: '10px',
        }}
      >
        <Grid item md={6} lg={6} sx={{ justifyItems: 'center' }}>
          <Leaderboard
            loading={loading}
            catalogues={catalogues}
            scores={scores}
            group="A"
          />
        </Grid>
        <Grid item md={6} lg={6} sx={{ justifyItems: 'center' }}>
          <Leaderboard
            loading={loading}
            catalogues={catalogues}
            scores={scores}
            group="B"
          />
        </Grid>
      </Grid>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'auto 1fr' }}>
        {catalogues.tournamentGroups.length > 0 && (
          <FavoriteTeam
            club={orderedList}
            handleOnDragEnd={handleOnDragEnd}
            completeRounds={completeRounds}
          />
        )}
        <Grid container>
          <Grid item md={6} lg={6} sx={{ justifyItems: 'center' }}>
            <RoundMatches
              catalogues={catalogues}
              scores={scores}
              orderedList={orderedList}
              round={1}
            />
          </Grid>
          <Grid item md={6} lg={6} sx={{ justifyItems: 'center' }}>
            <RoundMatches
              catalogues={catalogues}
              scores={scores}
              orderedList={orderedList}
              round={2}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default TournamentSimulator;
