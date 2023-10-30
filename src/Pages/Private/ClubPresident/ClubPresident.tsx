import { useClubPresident } from './hooks';
import { Button, Box } from '@mui/material';
import { Table, Dialog } from '@/components';
import { ClubPresidentForm, DeleteClub } from './components';

const ClubPresident = () => {
  const {
    headers,
    rows,
    deleteClub,
    updateClubPresident,
    handleClickOpen,
    handleClose,
    open,
    handleClickOpenUpdate,
    handleCloseUpdate,
    openUpdate,
    handleCreate,
    defaultValues,
    handleClickOpenDelete,
    handleCloseDelete,
    openDelete,
  } = useClubPresident();
  return (
    <Box sx={{ padding: '20px' }}>
      <Dialog
        handleClose={handleClose}
        open={open}
        title="Crear nuevo presidente"
      >
        <ClubPresidentForm
          handleClose={handleClose}
          handleFunction={handleCreate}
          defaultValues={{ id: '', name: '', image: '' }}
        />
      </Dialog>
      <Dialog
        handleClose={handleCloseUpdate}
        open={openUpdate}
        title="Modificar categoría"
      >
        <ClubPresidentForm
          handleClose={handleCloseUpdate}
          handleFunction={updateClubPresident}
          defaultValues={defaultValues}
        />
      </Dialog>
      <Dialog
        handleClose={handleCloseDelete}
        open={openDelete}
        title="Eliminar Presidente"
      >
        <DeleteClub handleClose={handleCloseDelete} handleDelete={deleteClub} />
      </Dialog>
      <Button variant="contained" onClick={handleClickOpen}>
        Crear Nuevo Presidente
      </Button>
      <Table
        headers={headers}
        rows={rows}
        name="Presidentes"
        deleteItem={handleClickOpenDelete}
        updateItem={handleClickOpenUpdate}
      />
    </Box>
  );
};

export default ClubPresident;
