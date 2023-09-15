import {
  Box,
  TextField,
  Button,
  Typography,
  Avatar,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { CloudUpload } from '@mui/icons-material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { DataValues, ClubFormProps } from './ClubForm.types';
import { DialogActions } from '@/components';
import { get } from 'lodash';

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

const ClubForm = ({
  handleClose,
  handleFunction,
  defaultValues,
  catalogues,
}: ClubFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm<DataValues>({
    defaultValues: {
      name: defaultValues?.name,
      clubCategoryId: defaultValues?.clubCategoryId,
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
        <ToggleButtonGroup
          color="primary"
          value={watch('clubCategoryId').toString()}
          exclusive
          aria-label="Platform"
        >
          {catalogues.clubCategory.map((item) => (
            <ToggleButton
              value={item.id}
              onClick={() => setValue('clubCategoryId', parseInt(item.id))}
              key={item.id}
            >
              <Avatar alt="Remy Sharp" src={item.image} />
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
        <Box sx={{ width: '100%' }}>
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUpload />}
            href="#file-upload"
            fullWidth
          >
            Seleccionar Imagen
            <VisuallyHiddenInput
              type="file"
              {...register('image', {
                required: defaultValues?.image
                  ? false
                  : 'Este campo es obligatorio',
              })}
            />
          </Button>
          {errors.image && (
            <Typography variant="caption">
              {errors.image.message?.toString()}
            </Typography>
          )}
        </Box>
        {watch('image') && (
          <Typography variant="subtitle1">
            {get(watch('image')[0], 'name')}
          </Typography>
        )}
        {defaultValues?.image && !watch('image')?.length && (
          <Avatar
            alt="Remy Sharp"
            src={defaultValues?.image as string}
            sx={{ width: 100, height: 100 }}
          />
        )}
        <DialogActions handleClose={handleClose} />
      </Box>
    </>
  );
};

export default ClubForm;
