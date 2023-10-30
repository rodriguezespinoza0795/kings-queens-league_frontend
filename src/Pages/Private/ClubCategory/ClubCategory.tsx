import { useClubCategory } from './hooks';
import { Button, Box } from '@mui/material';
import { Table, Dialog } from '@/components';
import { ClubCategoryForm, DeleteClubCategory } from './components';

const ClubCategory = () => {
  const {
    headers,
    rows,
    deleteClubCategory,
    updateClubCategory,
    handleClickOpen,
    handleClose,
    open,
    handleClickOpenUpdate,
    handleCloseUpdate,
    openUpdate,
    handleCreateCategory,
    defaultValues,
    handleClickOpenDelete,
    handleCloseDelete,
    openDelete,
  } = useClubCategory();
  return (
    <Box sx={{ padding: '20px' }}>
      <Dialog
        handleClose={handleClose}
        open={open}
        title="Crear nueva categoría"
      >
        <ClubCategoryForm
          handleClose={handleClose}
          handleFunction={handleCreateCategory}
          defaultValues={{ id: '', name: '', image: '' }}
        />
      </Dialog>
      <Dialog
        handleClose={handleCloseUpdate}
        open={openUpdate}
        title="Modificar categoría"
      >
        <ClubCategoryForm
          handleClose={handleCloseUpdate}
          handleFunction={updateClubCategory}
          defaultValues={defaultValues}
        />
      </Dialog>
      <Dialog
        handleClose={handleCloseDelete}
        open={openDelete}
        title="Eliminar categoría"
      >
        <DeleteClubCategory
          handleClose={handleCloseDelete}
          handleDelete={deleteClubCategory}
        />
      </Dialog>
      <Button variant="contained" onClick={handleClickOpen}>
        Crear Nueva Categoría
      </Button>
      <Table
        headers={headers}
        name="Tipos de Club"
        rows={rows}
        deleteItem={handleClickOpenDelete}
        updateItem={handleClickOpenUpdate}
      />
    </Box>
  );
};

export default ClubCategory;
