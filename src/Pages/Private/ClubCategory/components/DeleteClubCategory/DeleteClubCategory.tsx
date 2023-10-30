import { Box } from '@mui/material';
import { DeleteClubCategoryProps } from './DeleteClubCategory.types';
import { DialogActions } from '@/components';

const DeleteClubCategory = ({
  handleClose,
  handleDelete,
}: DeleteClubCategoryProps) => {
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

export default DeleteClubCategory;
