import { usePlayer } from './hooks';
import { Box, Button } from '@mui/material';
import { Table, Dialog } from '@/components';
import { PlayerForm, DeletePlayer } from './components';

const Player = () => {
  const {
    headers,
    rows,
    deletePlayer,
    updatePlayer,
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
  } = usePlayer();

  return (
    <Box sx={{ padding: '20px' }}>
      <Dialog handleClose={handleClose} open={open} title="Crear nuevo jugador">
        <PlayerForm
          handleClose={handleClose}
          handleFunction={handleCreate}
          defaultValues={{
            id: '',
            name: '',
            lastName: '',
            nickName: '',
            playerTypeId: 1,
            positionId: 1,
            clubId: 1,
            image: '',
          }}
          catalogues={catalogues}
        />
      </Dialog>
      <Dialog
        handleClose={handleCloseUpdate}
        open={openUpdate}
        title="Modificar categoría"
      >
        <PlayerForm
          handleClose={handleCloseUpdate}
          handleFunction={updatePlayer}
          defaultValues={defaultValues}
          catalogues={catalogues}
        />
      </Dialog>
      <Dialog
        handleClose={handleCloseDelete}
        open={openDelete}
        title="Eliminar Jugador"
      >
        <DeletePlayer
          handleClose={handleCloseDelete}
          handleDelete={deletePlayer}
        />
      </Dialog>
      <Button variant="contained" onClick={handleClickOpen}>
        Crear Nuevo Jugador
      </Button>
      <Table
        headers={headers}
        name="Jugadores"
        rows={rows}
        catalogues={catalogues}
        deleteItem={handleClickOpenDelete}
        updateItem={handleClickOpenUpdate}
      />
    </Box>
  );
};

export default Player;
