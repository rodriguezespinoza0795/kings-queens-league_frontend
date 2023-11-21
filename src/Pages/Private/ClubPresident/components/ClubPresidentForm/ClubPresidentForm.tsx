import { Box } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { DataValues, ClubCategoryFormProps } from './ClubPresidentForm.types';
import { DialogActions, TextField, CloudUploadField } from '@/components';

const ClubCountryForm = ({
  handleClose,
  handleCreate,
  handleUpdate,
  defaultValues,
}: ClubCategoryFormProps) => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<DataValues>({ defaultValues });

  const onSubmit: SubmitHandler<DataValues> = async (data) => {
    if (data.id) {
      handleUpdate(data);
    } else {
      handleCreate(data);
    }
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
          control={control}
          errors={errors}
          name="name"
          label="Nombre"
        />
        <CloudUploadField
          control={control}
          errors={errors}
          watch={watch}
          defaultImage={defaultValues?.image as string}
        />
        <DialogActions handleClose={handleClose} />
      </Box>
    </>
  );
};

export default ClubCountryForm;
