import { usePosition } from './hooks';
import { Button, Box } from '@mui/material';
import { Table, Dialog } from '@/components';
import { PositionForm, DeletePosition } from './components';

const Position = () => {
  const {
    headers,
    rows,
    deletePosition,
    updatePosition,
    handleClickOpen,
    handleClose,
    open,
    handleClickOpenUpdate,
    handleCloseUpdate,
    openUpdate,
    handleCreatePosition,
    defaultValues,
    handleClickOpenDelete,
    handleCloseDelete,
    openDelete,
  } = usePosition();
  return (
    <Box>
      <Dialog
        handleClose={handleClose}
        open={open}
        title="Crear nueva posición"
      >
        <PositionForm
          handleClose={handleClose}
          handleFunction={handleCreatePosition}
          defaultValues={{ id: '', name: '', description: '' }}
        />
      </Dialog>
      <Dialog
        handleClose={handleCloseUpdate}
        open={openUpdate}
        title="Modificar posición"
      >
        <PositionForm
          handleClose={handleCloseUpdate}
          handleFunction={updatePosition}
          defaultValues={defaultValues}
        />
      </Dialog>
      <Dialog
        handleClose={handleCloseDelete}
        open={openDelete}
        title="Eliminar posición"
      >
        <DeletePosition
          handleClose={handleCloseDelete}
          handleDelete={deletePosition}
        />
      </Dialog>
      <Button variant="contained" onClick={handleClickOpen}>
        Crear Nueva Posición
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

export default Position;
