import { Box } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { DataValues, ClubFormProps } from './ClubForm.types';
import {
  DialogActions,
  TextField,
  CloudUploadField,
  ToggleButton,
  Select,
  ColorPicker,
} from '@/components';

const ClubForm = ({
  handleClose,
  handleCreate,
  handleUpdate,
  defaultValues,
  catalogues,
}: ClubFormProps) => {
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
        <ToggleButton
          control={control}
          name="clubCategoryId"
          catalogues={catalogues.clubCategories}
          errors={errors}
        />
        <ToggleButton
          control={control}
          name="clubCountryId"
          catalogues={catalogues.clubCountries}
          errors={errors}
        />
        <Select
          control={control}
          name="clubPresidentId"
          catalogues={catalogues.clubPresidents.map((item) => item)}
          errors={errors}
          label="Presidente"
        />
        <ColorPicker control={control} name="color" />
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

export default ClubForm;
