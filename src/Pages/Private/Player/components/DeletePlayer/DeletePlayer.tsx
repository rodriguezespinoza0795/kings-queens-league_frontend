import { Box } from '@mui/material';
import { DeletePlayerProps } from './DeletePlayer.types';
import { DialogActions } from '@/components';

const DeletePlayer = ({ handleClose, handleDelete }: DeletePlayerProps) => {
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

export default DeletePlayer;
