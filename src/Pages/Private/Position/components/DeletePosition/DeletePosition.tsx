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
        onSubmit={onSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'Column',
          paddingY: '10px',
          gap: '1rem',
          alignItems: 'center',
        }}
      >
        <DialogActions handleClose={handleClose} />
      </Box>
    </>
  );
};

export default DeletePosition;
