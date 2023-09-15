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

export default DeleteClubCategory;
