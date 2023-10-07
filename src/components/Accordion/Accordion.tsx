import { useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Avatar,
  Badge,
  Box,
  Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { ExpandMore } from '@mui/icons-material';
import { PlayerRound } from '@/types';

interface PlayerRoundScores extends PlayerRound {
  roundScore: number[];
}

export default function ControlledAccordions({
  data,
  category,
}: {
  data: PlayerRoundScores[];
  category: string;
}) {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  }));

  return (
    <div>
      {data.map((player) => (
        <Accordion
          key={`${category}${player.playerId}`}
          expanded={expanded === `${category}${player.playerId}`}
          onChange={handleChange(`${category}${player.playerId}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              {player.score} pts
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              {player.player?.name} {player.player?.lastName}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ display: 'flex', gap: '15px' }}>
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              badgeContent={
                <SmallAvatar
                  alt="Remy Sharp"
                  src={player.player?.club?.image}
                />
              }
            >
              <Avatar
                alt="Travis Howard"
                src={player.player?.image}
                sx={{ width: 56, height: 56 }}
              />
            </Badge>
            <Box>
              <Typography>
                Nombre: {player.player?.name} {player.player?.lastName}
              </Typography>
              <Typography>Equipo: {player.player?.club.name}</Typography>
              <Box sx={{ display: 'flex', gap: '5px' }}>
                {player.roundScore.map((item, index) => (
                  <Paper sx={{ paddingX: '5px' }} key={index}>
                    {item}
                  </Paper>
                ))}
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
