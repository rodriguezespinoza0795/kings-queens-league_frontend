import { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useTournamentAdmin } from './hooks';
import { TransferList } from '@/components';
import {
  TournamentDetails,
  TournamentRoundsDetails,
  TournamentPlayerRounds,
} from './components';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ display: 'grid', gap: '20px' }}>{children}</Box>
      )}
    </div>
  );
}

const TournamentAdmin = () => {
  const { id } = useParams();
  const [value, setValue] = useState(2);
  const {
    tournamentData,
    clubsData,
    tournamentGroupData,
    tournamentRoundsData,
    handleCreate,
    players,
  } = useTournamentAdmin(id || '');

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: 'grid', padding: '10px', gap: '20px' }}>
      <TournamentDetails data={tournamentData} />
      <Box sx={{ width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            borderBottom: 1,
            borderColor: 'divider',
            justifyContent: 'center',
            marginBottom: '20px',
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Grupos" {...a11yProps(0)} />
            <Tab label="Jornadas" {...a11yProps(1)} />
            <Tab label="Calificaciones" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          {tournamentGroupData && tournamentData && (
            <TransferList
              tournamentData={tournamentData}
              dataList={clubsData as any}
              defaultValues={tournamentGroupData}
              catalogue={clubsData as unknown[]}
            />
          )}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <TournamentRoundsDetails
            data={tournamentRoundsData}
            catalogue={clubsData}
            tournamentData={tournamentData}
            handleCreate={handleCreate}
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <TournamentPlayerRounds
            data={tournamentRoundsData}
            players={players}
          />
        </CustomTabPanel>
      </Box>
    </Box>
  );
};

export default TournamentAdmin;
