import { Box } from '@mui/material';
import { DeletePositionProps } from './DeletePosition.types';
import { DialogActions } from '@/components';

const DeletePosition = ({ handleClose, handleDelete }: DeletePositionProps) => {
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

export default DeletePosition;
