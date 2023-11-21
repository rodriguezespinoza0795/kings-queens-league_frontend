import { useClub } from './hooks';
import { Button, Box } from '@mui/material';
import { Table, Dialog } from '@/components';
import { ClubForm, DeleteClub } from './components';
import { headers } from './club.utils';

const Club = () => {
  const {
    rows,
    deleteClub,
    handleUpdate,
    handleClickOpen,
    handleClose,
    open,
    handleClickOpenUpdate,
    handleCreate,
    defaultValues,
    handleClickOpenDelete,
    handleCloseDelete,
    openDelete,
    catalogues,
  } = useClub();
  return (
    <Box sx={{ padding: '20px' }}>
      <Dialog handleClose={handleClose} open={open} title="Club de Liga">
        <ClubForm
          handleClose={handleClose}
          handleCreate={handleCreate}
          handleUpdate={handleUpdate}
          defaultValues={defaultValues}
          catalogues={catalogues}
        />
      </Dialog>
      <Dialog
        handleClose={handleCloseDelete}
        open={openDelete}
        title="Eliminar Club"
      >
        <DeleteClub handleClose={handleCloseDelete} handleDelete={deleteClub} />
      </Dialog>
      <Button variant="contained" onClick={handleClickOpen}>
        Crear Nuevo Club
      </Button>
      <Table
        headers={headers}
        name="Equipos"
        rows={rows}
        deleteItem={handleClickOpenDelete}
        updateItem={handleClickOpenUpdate}
      />
    </Box>
  );
};

export default Club;
