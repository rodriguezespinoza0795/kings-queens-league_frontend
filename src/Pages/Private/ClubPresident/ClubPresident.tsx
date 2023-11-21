import { Button, Box } from '@mui/material';
import { Table, Dialog } from '@/components';
import { headers } from './ClubPresident.utils';
import { useClubPresident } from './hooks';
import { ClubPresidentForm, DeleteClubPresident } from './components';

const ClubPresident = () => {
  const {
    rows,
    handleOpen,
    handleClose,
    open,
    defaultValues,
    handleCreatePresident,
    handleOpenUpdate,
    handleUpdatePresident,
    handleCloseDelete,
    openDelete,
    handleOpenDelete,
    deleteClubPresident,
  } = useClubPresident();
  return (
    <Box sx={{ padding: '20px' }}>
      <Dialog handleClose={handleClose} open={open} title="Presidente de Liga">
        <ClubPresidentForm
          handleClose={handleClose}
          handleCreate={handleCreatePresident}
          handleUpdate={handleUpdatePresident}
          defaultValues={defaultValues}
        />
      </Dialog>
      <Dialog
        handleClose={handleCloseDelete}
        open={openDelete}
        title="Eliminar categoría"
      >
        <DeleteClubPresident
          handleClose={handleCloseDelete}
          handleDelete={deleteClubPresident}
        />
      </Dialog>
      <Button variant="contained" onClick={handleOpen}>
        Crear Nuevo Presidente de Club
      </Button>
      <Table
        headers={headers}
        name="Presidentes"
        rows={rows}
        filter={false}
        updateItem={handleOpenUpdate}
        deleteItem={handleOpenDelete}
      />
    </Box>
  );
};

export default ClubPresident;
