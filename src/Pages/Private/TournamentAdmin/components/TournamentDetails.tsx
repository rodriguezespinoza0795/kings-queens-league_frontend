import { Paper, Typography, Avatar } from '@mui/material';
import { Tournament } from '@/types';

const TournamentDetails = ({ data }: { data: Tournament | undefined }) => {
  return (
    <>
      {!!data && (
        <Paper
          elevation={3}
          sx={{
            display: 'flex',
            padding: '10px',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <Typography align="center" variant="h6">
            {data.name} Edición: {data.edition}
          </Typography>
          <Avatar
            alt="Remy Sharp"
            src={data.clubCategory.image}
            sx={{ width: 50, height: 50 }}
          />
          <Typography align="center">
            Número de grupos: {data.numGroup}
          </Typography>
        </Paper>
      )}
    </>
  );
};

export default TournamentDetails;
