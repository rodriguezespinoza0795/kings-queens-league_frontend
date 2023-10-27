import { useTournament } from './hooks';
import { Box, Button } from '@mui/material';
import { Table, Dialog } from '@/components';
import { TournamentForm, DeleteTournament } from './components';

const Tournament = () => {
  const {
    headers,
    rows,
    deleteTournament,
    handleUpdate,
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
    catalogues,
    seeDetails,
  } = useTournament();

  return (
    <Box sx={{ padding: '20px' }}>
      <Dialog handleClose={handleClose} open={open} title="Crear nuevo torneo">
        <TournamentForm
          handleClose={handleClose}
          handleFunction={handleCreate}
          defaultValues={{
            name: '',
            numGroup: '0',
            edition: '0',
            clubCategoryId: 1,
          }}
          catalogues={catalogues}
        />
      </Dialog>
      <Dialog
        handleClose={handleCloseUpdate}
        open={openUpdate}
        title="Modificar torneo"
      >
        <TournamentForm
          handleClose={handleCloseUpdate}
          handleFunction={handleUpdate}
          defaultValues={defaultValues}
          catalogues={catalogues}
        />
      </Dialog>
      <Dialog
        handleClose={handleCloseDelete}
        open={openDelete}
        title="Eliminar torneo"
      >
        <DeleteTournament
          handleClose={handleCloseDelete}
          handleDelete={deleteTournament}
        />
      </Dialog>
      <Button variant="contained" onClick={handleClickOpen}>
        Crear Nuevo Torneo
      </Button>
      <Table
        headers={headers}
        rows={rows}
        deleteItem={handleClickOpenDelete}
        updateItem={handleClickOpenUpdate}
        detailsItem={seeDetails}
      />
    </Box>
  );
};

export default Tournament;
