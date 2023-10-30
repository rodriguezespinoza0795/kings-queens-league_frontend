import { Box } from '@mui/material';
import { DeleteTournamentProps } from './DeleteTournament.types';
import { DialogActions } from '@/components';

const DeleteTournament = ({
  handleClose,
  handleDelete,
}: DeleteTournamentProps) => {
  const onSubmit = async () => {
    handleDelete();
    handleClose();
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'Column',
          paddingY: '10px',
          gap: '1rem',
          alignItems: 'center',
        }}
      >
        <DialogActions handleClose={handleClose} onSubmit={onSubmit} />
      </Box>
    </>
  );
};

export default DeleteTournament;
