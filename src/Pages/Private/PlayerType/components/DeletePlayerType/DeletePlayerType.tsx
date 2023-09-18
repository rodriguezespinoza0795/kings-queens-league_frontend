import { Box } from '@mui/material';
import { DeletePlayerTypeProps } from './DeletePlayerType.types';
import { DialogActions } from '@/components';

const DeletePlayerType = ({
  handleClose,
  handleDelete,
}: DeletePlayerTypeProps) => {
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

export default DeletePlayerType;
