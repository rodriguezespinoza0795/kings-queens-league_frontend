import { Box, List, ListItem, Avatar, Typography } from '@mui/material';
import { TournamentGroup } from '@/types';
import { CatalogueType, ObjSum } from './TournamentSimulator.types';
const RoundMatches = ({
  catalogues,
  scores,
  orderedList,
  round,
}: {
  catalogues: CatalogueType;
  scores: ObjSum;
  orderedList: TournamentGroup[];
  round: number;
}) => {
  const groupA = catalogues.tournamentGroups
    ?.filter((item) => item.name === 'A')
    .map((item) => ({ ...item, ...scores[item.clubId] }))
    .sort((a, b) => b.points - a.points || b.score - a.score);

  const groupB = catalogues.tournamentGroups
    ?.filter((item) => item.name === 'B')
    .map((item) => ({ ...item, ...scores[item.clubId] }))
    .sort((a, b) => b.points - a.points || b.score - a.score);

  const compareClub = (clubA: number, clubB: number) => {
    const clubHome = orderedList
      .map(({ clubId }: { clubId: number }) => clubId)
      .indexOf(clubA);
    const clubAway = orderedList
      .map(({ clubId }: { clubId: number }) => clubId)
      .indexOf(clubB);

    return clubHome > clubAway
      ? orderedList[clubAway]?.club
      : orderedList[clubHome]?.club;
  };

  const Round1 = groupA
    .slice(0, 4)
    .map((match, index) => [
      match?.club,
      groupB[3 - index]?.club,
      compareClub(
        parseInt(match?.club?.id, 10),
        parseInt(groupB[3 - index]?.club?.id, 10),
      ),
    ]);

  const Round2 = [
    [
      Round1?.[0]?.[2],
      Round1?.[2]?.[2],
      compareClub(
        parseInt(Round1?.[0]?.[2]?.id, 10),
        parseInt(Round1?.[2]?.[2]?.id, 10),
      ),
    ],
    [
      Round1?.[1]?.[2],
      Round1?.[3]?.[2],
      compareClub(
        parseInt(Round1?.[1]?.[2]?.id, 10),
        parseInt(Round1?.[3]?.[2]?.id, 10),
      ),
    ],
  ];

  const Round3 = [
    [
      Round2?.[0]?.[2],
      Round2?.[1]?.[2],
      compareClub(
        parseInt(Round2?.[0]?.[2]?.id, 10),
        parseInt(Round2?.[1]?.[2]?.id, 10),
      ),
    ],
  ];

  const getRoundTeams = (round: number) => {
    if (round === 1) {
      return Round1;
    }
    if (round === 2) {
      return Round2;
    }
    if (round === 3) {
      return Round3;
    }
    return [];
  };

  const rounds = {
    1: 'Cuartos',
    2: 'Semis',
    3: 'Final',
  };

  return (
    <>
      <Typography textAlign={'center'}>
        {rounds[round as keyof typeof rounds]}
      </Typography>
      <List key={round}>
        {getRoundTeams(round).map((match, index) => (
          <ListItem
            disablePadding
            key={index}
            sx={{ justifyContent: 'center' }}
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
                src={match?.[0]?.image}
                sx={{ width: 50, height: 50 }}
              />
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
                src={match?.[1]?.image}
                sx={{ width: 50, height: 50 }}
              />
            </Box>
            <Typography align="center">=</Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src={match?.[2]?.image}
                sx={{ width: 50, height: 50 }}
              />
            </Box>
          </ListItem>
        ))}
      </List>
      {round === 2 && (
        <>
          <Typography textAlign={'center'}>
            {rounds[3 as keyof typeof rounds]}
          </Typography>
          <List key={3}>
            {getRoundTeams(3).map((match, index) => (
              <ListItem
                disablePadding
                key={index}
                sx={{ justifyContent: 'center' }}
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
                    src={match?.[0]?.image}
                    sx={{ width: 50, height: 50 }}
                  />
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
                    src={match?.[1]?.image}
                    sx={{ width: 50, height: 50 }}
                  />
                </Box>
                <Typography align="center">=</Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src={match?.[2]?.image}
                    sx={{ width: 50, height: 50 }}
                  />
                </Box>
              </ListItem>
            ))}
          </List>
        </>
      )}
    </>
  );
};

export default RoundMatches;
