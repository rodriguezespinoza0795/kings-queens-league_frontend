import { Box, Paper, Typography, Avatar } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useTournamentAdmin } from './hooks';
import { TransferList } from '@/components';

const TournamentAdmin = () => {
  const { id } = useParams();
  const { tournamentData, clubsData, tournamentGroupData } = useTournamentAdmin(
    id || '',
  );

  return (
    <Box sx={{ display: 'grid', padding: '10px', gap: '20px' }}>
      {!!tournamentData && (
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
            {tournamentData.name} Edición: {tournamentData.edition}
          </Typography>
          <Avatar
            alt="Remy Sharp"
            src={tournamentData.clubCategory.image}
            sx={{ width: 50, height: 50 }}
          />
          <Typography align="center">
            Número de grupos: {tournamentData.numGroup}
          </Typography>
        </Paper>
      )}
      {tournamentGroupData && (
        <TransferList
          dataList={clubsData as any}
          defaultValues={tournamentGroupData}
          catalogue={clubsData as unknown[]}
        />
      )}
    </Box>
  );
};

export default TournamentAdmin;
