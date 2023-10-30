import { Box } from '@mui/material';
import { DeleteClubProps } from './DeleteClub.types';
import { DialogActions } from '@/components';

const DeleteClub = ({ handleClose, handleDelete }: DeleteClubProps) => {
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

export default DeleteClub;
