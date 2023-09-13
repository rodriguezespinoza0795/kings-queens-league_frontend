import { useClubCategory } from "./hooks";
import Button from '@mui/material/Button';
import { Table, Dialog } from '@/components'
import { CreateClubCategory, UpdateClubCategory } from './components'

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
        defaultValues
    } = useClubCategory()
    return (
        <>
            <Dialog handleClose={handleClose} open={open}> 
                <CreateClubCategory handleClose={handleClose} handleCreate={handleCreateCategory}/>
            </Dialog>
            <Dialog handleClose={handleCloseUpdate} open={openUpdate}> 
                <UpdateClubCategory
                    handleClose={handleCloseUpdate}
                    handleUpdate={updateClubCategory}
                    defaultValues={defaultValues}
                />
            </Dialog>
            <Button variant="contained" onClick={handleClickOpen}>
                Crear Nueva Categoría
            </Button>
            <Table
                headers={headers}
                rows={rows}
                deleteItem={deleteClubCategory}  
                updateItem={handleClickOpenUpdate}
            />
        </>
    )
}

export default ClubCategory;