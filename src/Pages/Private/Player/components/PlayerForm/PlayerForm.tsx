import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Avatar,
  ToggleButton,
  ToggleButtonGroup,
  Autocomplete,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { CloudUpload } from '@mui/icons-material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { DataValues, PlayerFormProps } from './PlayerForm.types';
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

const PlayerForm = ({
  handleClose,
  handleFunction,
  defaultValues,
  catalogues,
}: PlayerFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm<DataValues>({
    defaultValues: {
      name: defaultValues?.name,
      lastName: defaultValues?.lastName,
      nickName: defaultValues?.nickName,
      playerTypeId: defaultValues?.playerTypeId,
      positionId: defaultValues?.positionId,
      clubId: defaultValues?.clubId,
    },
  });

  const onSubmit: SubmitHandler<DataValues> = async (data) => {
    handleFunction(data);
    handleClose();
  };

  const [category, setCategory] = useState(0);

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
          id="lastName"
          label="Apellido"
          variant="outlined"
          fullWidth
          {...register('lastName')}
          error={!!errors?.lastName}
          helperText={errors?.lastName?.message?.toString()}
        />
        <TextField
          id="nickName"
          label="Apodo"
          variant="outlined"
          fullWidth
          {...register('nickName')}
          error={!!errors?.nickName}
          helperText={errors?.nickName?.message?.toString()}
        />
        <ToggleButtonGroup
          color="primary"
          value={watch('positionId').toString()}
          exclusive
          aria-label="Platform"
        >
          {catalogues.positions.map((item) => (
            <ToggleButton
              value={item.id}
              onClick={() => setValue('positionId', parseInt(item.id))}
              key={item.id}
            >
              {item.name}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
        <ToggleButtonGroup
          color="primary"
          value={watch('playerTypeId').toString()}
          exclusive
          aria-label="Platform"
        >
          {catalogues.playerTypes.map((item) => (
            <ToggleButton
              value={item.id}
              onClick={() => setValue('playerTypeId', parseInt(item.id))}
              key={item.id}
            >
              {item.name}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
        <ToggleButtonGroup
          color="primary"
          exclusive
          aria-label="Platform"
          value={category.toString()}
        >
          {catalogues.clubCategories.map((item) => (
            <ToggleButton
              value={item.id}
              key={item.id}
              onClick={() => setCategory(parseInt(item.id, 10))}
            >
              <Avatar alt="Remy Sharp" src={item.image} />
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
        <Autocomplete
          id="country-select-demo"
          sx={{ width: 300 }}
          options={catalogues.clubs.filter(
            (item) => item.clubCategoryId === category,
          )}
          autoHighlight
          defaultValue={catalogues.clubs.find(
            (item) => watch('clubId').toString() === item.id,
          )}
          getOptionLabel={(option) => option.name}
          onChange={(_e, value) => setValue('clubId', parseInt(value.id, 10))}
          renderOption={(props, option) => (
            <Box
              component="li"
              sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
              {...props}
            >
              <Avatar alt="Remy Sharp" src={option.image} />
              {option.name}
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Equipo"
              inputProps={{
                ...params.inputProps,
                autoComplete: 'new-password',
              }}
            />
          )}
        />
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

export default PlayerForm;
