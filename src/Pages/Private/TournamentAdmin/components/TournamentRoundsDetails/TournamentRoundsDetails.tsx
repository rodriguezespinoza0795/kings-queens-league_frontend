import {
  Paper,
  Typography,
  Avatar,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  TextField,
} from '@mui/material';
import { TournamentRound, Club, Tournament } from '@/types';
import { ExpandMore } from '@mui/icons-material';
import { TournamentForm } from '../TournamentForm';
import { Dialog } from '@/components';
import { useTournamentRoundsDetails } from './useTournamentRoundsDetails';

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
  const {
    handleClose,
    open,
    onSubmit,
    handleOpen,
    expanded,
    handleChange,
    showField,
    handleFields,
    matchResults,
    setMatchResults,
    onSubmitRoundMatch,
  } = useTournamentRoundsDetails(handleCreate, tournamentData);
  const rounds = [...new Set(data?.map((item) => item.round))];

  console.log('matchResults', matchResults);

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
      {tournamentData?.isActive === 1 && (
        <Button variant="contained" onClick={handleOpen}>
          Agregar Jornada
        </Button>
      )}
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
            {showField ? (
              <Box sx={{ display: 'flex', width: '100%', gap: '20px' }}>
                <Button variant="outlined" onClick={handleFields} fullWidth>
                  Cancelar
                </Button>
                <Button
                  variant="contained"
                  onClick={() =>
                    onSubmitRoundMatch(
                      matchResults,
                      data?.filter((round) => round.round === item),
                    )
                  }
                  fullWidth
                >
                  Guardar
                </Button>
              </Box>
            ) : (
              <Button variant="contained" onClick={handleFields}>
                Agregar Resultados
              </Button>
            )}
            {data &&
              data
                .filter((round) => round.round === item)
                .map((item, index) => (
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
                      {showField && (
                        <>
                          <TextField
                            value={
                              matchResults[
                                `local${index + 1}` as keyof typeof matchResults
                              ]
                            }
                            onChange={(e) =>
                              setMatchResults({
                                ...matchResults,
                                [`local${index + 1}`]: e.target.value,
                              })
                            }
                            label="local"
                            variant="outlined"
                            sx={{ width: '60px' }}
                          />
                          {matchResults[
                            `local${index + 1}` as keyof typeof matchResults
                          ] ===
                            matchResults[
                              `away${index + 1}` as keyof typeof matchResults
                            ] &&
                            matchResults[
                              `local${index + 1}` as keyof typeof matchResults
                            ] !== '' && (
                              <TextField
                                value={
                                  matchResults[
                                    `localDraw${
                                      index + 1
                                    }` as keyof typeof matchResults
                                  ]
                                }
                                onChange={(e) =>
                                  setMatchResults({
                                    ...matchResults,
                                    [`localDraw${index + 1}`]: e.target.value,
                                  })
                                }
                                label="Draw"
                                variant="outlined"
                                sx={{ width: '60px' }}
                              />
                            )}
                        </>
                      )}
                    </Box>
                    <Typography align="center">VS</Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                      }}
                    >
                      {showField && (
                        <>
                          {matchResults[
                            `local${index + 1}` as keyof typeof matchResults
                          ] ===
                            matchResults[
                              `away${index + 1}` as keyof typeof matchResults
                            ] &&
                            matchResults[
                              `local${index + 1}` as keyof typeof matchResults
                            ] !== '' && (
                              <TextField
                                value={
                                  matchResults[
                                    `awayDraw${
                                      index + 1
                                    }` as keyof typeof matchResults
                                  ]
                                }
                                onChange={(e) =>
                                  setMatchResults({
                                    ...matchResults,
                                    [`awayDraw${index + 1}`]: e.target.value,
                                  })
                                }
                                label="Draw"
                                variant="outlined"
                                sx={{ width: '60px' }}
                              />
                            )}
                          <TextField
                            value={
                              matchResults[
                                `away${index + 1}` as keyof typeof matchResults
                              ]
                            }
                            onChange={(e) =>
                              setMatchResults({
                                ...matchResults,
                                [`away${index + 1}`]: e.target.value,
                              })
                            }
                            label="Visitante"
                            variant="outlined"
                            sx={{ width: '60px' }}
                          />
                        </>
                      )}
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
