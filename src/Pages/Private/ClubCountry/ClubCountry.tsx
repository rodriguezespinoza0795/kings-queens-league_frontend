import { Button, Box } from '@mui/material';
import { Table, Dialog } from '@/components';
import { headers } from './clubCountry.utils';
import { useClubCountry } from './hooks';
import { ClubCountryForm, DeleteClubCountry } from './components';

const ClubCountry = () => {
  const {
    rows,
    handleOpen,
    handleClose,
    open,
    defaultValues,
    handleCreateCountry,
    handleOpenUpdate,
    handleUpdateCountry,
    handleCloseDelete,
    openDelete,
    handleOpenDelete,
    deleteClubCountry,
  } = useClubCountry();
  return (
    <Box sx={{ padding: '20px' }}>
      <Dialog handleClose={handleClose} open={open} title="Ubicación de Liga">
        <ClubCountryForm
          handleClose={handleClose}
          handleCreate={handleCreateCountry}
          handleUpdate={handleUpdateCountry}
          defaultValues={defaultValues}
        />
      </Dialog>
      <Dialog
        handleClose={handleCloseDelete}
        open={openDelete}
        title="Eliminar categoría"
      >
        <DeleteClubCountry
          handleClose={handleCloseDelete}
          handleDelete={deleteClubCountry}
        />
      </Dialog>
      <Button variant="contained" onClick={handleOpen}>
        Crear Nuevo Pais de Club
      </Button>
      <Table
        headers={headers}
        name="Países"
        rows={rows}
        filter={false}
        updateItem={handleOpenUpdate}
        deleteItem={handleOpenDelete}
      />
    </Box>
  );
};

export default ClubCountry;
