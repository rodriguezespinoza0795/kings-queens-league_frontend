import { usePlayerType } from './hooks';
import { Button, Box } from '@mui/material';
import { Table, Dialog } from '@/components';
import { PlayerTypeForm, DeletePlayerType } from './components';

const PlayerType = () => {
  const {
    headers,
    rows,
    deletePlayerType,
    updatePlayerType,
    handleClickOpen,
    handleClose,
    open,
    handleClickOpenUpdate,
    handleCloseUpdate,
    openUpdate,
    handleCreatePlayerType,
    defaultValues,
    handleClickOpenDelete,
    handleCloseDelete,
    openDelete,
  } = usePlayerType();
  return (
    <Box>
      <Dialog
        handleClose={handleClose}
        open={open}
        title="Crear tipo de jugador"
      >
        <PlayerTypeForm
          handleClose={handleClose}
          handleFunction={handleCreatePlayerType}
          defaultValues={{ id: '', name: '' }}
        />
      </Dialog>
      <Dialog
        handleClose={handleCloseUpdate}
        open={openUpdate}
        title="Modificar categoría de jugador"
      >
        <PlayerTypeForm
          handleClose={handleCloseUpdate}
          handleFunction={updatePlayerType}
          defaultValues={defaultValues}
        />
      </Dialog>
      <Dialog
        handleClose={handleCloseDelete}
        open={openDelete}
        title="Eliminar categoría de jugador"
      >
        <DeletePlayerType
          handleClose={handleCloseDelete}
          handleDelete={deletePlayerType}
        />
      </Dialog>
      <Button variant="contained" onClick={handleClickOpen}>
        Crear Nueva Categoría de Jugador
      </Button>
      <Table
        headers={headers}
        rows={rows}
        deleteItem={handleClickOpenDelete}
        updateItem={handleClickOpenUpdate}
      />
    </Box>
  );
};

export default PlayerType;
