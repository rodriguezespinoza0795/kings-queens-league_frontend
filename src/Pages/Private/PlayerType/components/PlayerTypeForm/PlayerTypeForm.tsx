import { Box, TextField } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { DataValues, PlayerTypeFormProps } from './PlayerTypeForm.types';
import { DialogActions } from '@/components';

const PlayerTypeForm = ({
  handleClose,
  handleFunction,
  defaultValues,
}: PlayerTypeFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataValues>({ defaultValues: { name: defaultValues?.name } });

  const onSubmit: SubmitHandler<DataValues> = async (data) => {
    handleFunction(data);
    handleClose();
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: 'flex',
          flexDirection: 'Column',
          paddingY: '10px',
          gap: '1rem',
          alignItems: 'center',
        }}
      >
        <TextField
          id="name"
          label="Nombre"
          variant="outlined"
          fullWidth
          {...register('name', { required: 'Este campo es obligatorio' })}
          error={!!errors?.name}
          helperText={errors?.name?.message?.toString()}
        />
        <DialogActions handleClose={handleClose} />
      </Box>
    </>
  );
};

export default PlayerTypeForm;
