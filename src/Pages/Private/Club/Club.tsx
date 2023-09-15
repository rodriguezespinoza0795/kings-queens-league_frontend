import { useClub } from './hooks';
import Button from '@mui/material/Button';
import { Table, Dialog } from '@/components';
import { ClubForm, DeleteClub } from './components';

const Club = () => {
  const {
    headers,
    rows,
    deleteClub,
    updateClub,
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
  } = useClub();
  return (
    <>
      <Dialog handleClose={handleClose} open={open} title="Crear nuevo club">
        <ClubForm
          handleClose={handleClose}
          handleFunction={handleCreate}
          defaultValues={{ id: '', name: '', image: '', clubCategoryId: 1 }}
          catalogues={catalogues}
        />
      </Dialog>
      <Dialog
        handleClose={handleCloseUpdate}
        open={openUpdate}
        title="Modificar categoría"
      >
        <ClubForm
          handleClose={handleCloseUpdate}
          handleFunction={updateClub}
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
        rows={rows}
        deleteItem={handleClickOpenDelete}
        updateItem={handleClickOpenUpdate}
      />
    </>
  );
};

export default Club;
