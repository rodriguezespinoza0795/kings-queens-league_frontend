import { useState } from 'react';
import {
  Paper,
  Typography,
  Avatar,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from '@mui/material';
import { TournamentRound, Club, Tournament } from '@/types';
import { ExpandMore } from '@mui/icons-material';
import { TournamentForm } from '../TournamentForm';
import { Dialog } from '@/components';
import { get } from 'lodash';

const TournamentRoundsDetails = ({
  data,
  catalogue,
  tournamentData,
  handleCreate,
}: {
  data: TournamentRound[] | undefined;
  catalogue: Club[] | undefined;
  tournamentData: Tournament | undefined;
  handleCreate: (data: any) => void;
}) => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const rounds = [...new Set(data?.map((item) => item.round))];

  const onSubmit = (data: any, matches: number) => {
    const parsedData = [...Array(matches).keys()].map((item) => {
      return {
        tournamentId: parseInt(tournamentData?.id || '0', 10),
        clubIdHome: parseInt(get(data, `home${item}`, '0'), 10),
        clubIdAway: parseInt(get(data, `away${item}`, '0'), 10),
        round: parseInt(data.round, 10),
      };
    });
    handleCreate(parsedData);
  };

  return (
    <>
      <Dialog handleClose={handleClose} open={open} title="Crear nueva jornada">
        {catalogue && (
          <TournamentForm
            handleClose={handleClose}
            handleFunction={onSubmit}
            catalogues={catalogue}
          />
        )}
      </Dialog>
      <Button variant="contained" onClick={handleOpen}>
        Agregar Jornada
      </Button>
      {rounds.map((item) => (
        <Accordion
          expanded={expanded === `panel${item}`}
          onChange={handleChange(`panel${item}`)}
          key={item}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              Jornada {item}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ display: 'grid', gap: '10px' }}>
            {data &&
              data
                .filter((round) => round.round === item)
                .map((item) => (
                  <Paper
                    elevation={3}
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 25px 1fr',
                      padding: '10px',
                      gap: '20px',
                      alignItems: 'center',
                    }}
                    key={item.id}
                  >
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
                        src={item.clubHome.image}
                        sx={{ width: 50, height: 50 }}
                      />
                      <Typography align="center">
                        {item.clubHome.name}
                      </Typography>
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
                        src={item.clubAway.image}
                        sx={{ width: 50, height: 50 }}
                      />
                      <Typography align="center">
                        {item.clubAway.name}
                      </Typography>
                    </Box>
                  </Paper>
                ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default TournamentRoundsDetails;
