import {
  Typography,
  Avatar,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Skeleton,
  Box,
} from '@mui/material';
import { CatalogueType, ObjSum } from './TournamentSimulator.types';

const Leaderboard = ({
  loading,
  catalogues,
  scores,
  group,
}: {
  loading: boolean;
  catalogues: CatalogueType;
  scores: ObjSum;
  group: String;
}) => {
  return (
    <>
      {loading ? (
        <>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Skeleton variant="text" sx={{ fontSize: '1.5rem' }} width={300} />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Skeleton variant="rounded" width={300} height={300} />
          </Box>
        </>
      ) : (
        <>
          <Typography variant="h6" textAlign={'center'}>
            Grupo {group}
          </Typography>
          <Table
            size="small"
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <TableBody>
              {catalogues.tournamentGroups
                ?.filter((item) => item.name === group)
                .map((item) => ({ ...item, ...scores[item.clubId] }))
                .sort((a, b) => b.points - a.points || b.score - a.score)
                .map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <Avatar alt={item.club.name} src={item.club.image} />
                    </TableCell>
                    <TableCell>{item.club.name}</TableCell>
                    <TableCell>{item.points}</TableCell>
                    <TableCell>{item.score}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </>
      )}
    </>
  );
};

export default Leaderboard;
