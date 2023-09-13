import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useForm, SubmitHandler } from "react-hook-form"
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import { DataValues, CreateClubCategoryProps } from './CreateClubCategory.types'

const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

const CreateClubCategory = ({handleClose, handleCreate}: CreateClubCategoryProps) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<DataValues>()

    const uploadFile = async (formData: FormData) => {
        const response = await fetch(`${import.meta.env.VITE_API}v1/upload`, {
            method:'POST',
            body: formData
        })
        const data = await response.json()
        return data;
    }

    const onSubmit: SubmitHandler<DataValues> = async (data) => {
        const formData = new FormData();
        formData.append("file", data.file[0]);
        const response = await uploadFile(formData)
        handleCreate(data.name, response.secure_url)
        handleClose()
    }

   return (
    <>
        <DialogTitle id="alert-dialog-title">
            Crear nueva categoría
        </DialogTitle>
        <DialogContent >
            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={
                    {display:"flex", flexDirection:"Column", paddingY:"10px", gap:"1rem", alignItems:"center"}
                }
            >
                <TextField
                    id="name"
                    label="Nombre"
                    variant="outlined"
                    fullWidth
                    {...register("name", { required:  "Este campo es obligatorio" })}
                    error={!!errors?.name}
                    helperText={errors?.name?.message?.toString()}
                />
                <Box sx={{width:"100%"}}>
                    <Button
                        component="label"
                        variant="contained"
                        startIcon={<CloudUploadIcon />}
                        href="#file-upload"
                        fullWidth
                        >
                        Seleccionar Imagen
                        <VisuallyHiddenInput
                            type="file"
                            {...register("file", { required:  "Este campo es obligatorio"})}
                        />
                    </Button>
                    {errors.file && 
                        <Typography variant="caption">
                            {errors.file.message?.toString()}
                        </Typography>
                    }
                </Box>
                <Typography variant="subtitle1">
                    {watch('file')?.[0]?.name}
                </Typography>
                <DialogActions sx={{display:"flex", width:"100%", justifyContent:"space-around"}}>
                    <Button onClick={handleClose} variant="outlined" color="error">Cancelar</Button>
                    <Button autoFocus type='submit' variant="contained">
                        Crear
                    </Button>
                </DialogActions>
            </Box>
        </DialogContent>
    </>
   )
}

export default CreateClubCategory;