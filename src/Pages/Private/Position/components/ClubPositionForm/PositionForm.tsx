import { Box, TextField } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { DataValues, PositionFormProps } from './PositionForm.types';
import { DialogActions } from '@/components';

const PositionForm = ({
  handleClose,
  handleFunction,
  defaultValues,
}: PositionFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataValues>({
    defaultValues: {
      name: defaultValues?.name,
      description: defaultValues?.description,
    },
  });

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
        <TextField
          id="description"
          label="Description"
          variant="outlined"
          fullWidth
          {...register('description', {
            required: 'Este campo es obligatorio',
          })}
          error={!!errors?.description}
          helperText={errors?.description?.message?.toString()}
        />
        <DialogActions handleClose={handleClose} />
      </Box>
    </>
  );
};

export default PositionForm;
