import {
  Box,
  TextField,
  Avatar,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TournamentFormProps } from './TournamentForm.types';
import { DialogActions } from '@/components';
import { TournamentInput } from '@/types';

const ClubForm = ({
  handleClose,
  handleFunction,
  defaultValues,
  catalogues,
}: TournamentFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm<TournamentInput>({
    defaultValues: {
      name: defaultValues?.name,
      numGroup: defaultValues?.numGroup,
      edition: defaultValues?.edition,
      clubCategoryId: defaultValues?.clubCategoryId,
    },
  });

  const onSubmit: SubmitHandler<TournamentInput> = async (data) => {
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
          id="edition"
          label="Edición"
          variant="outlined"
          fullWidth
          {...register('edition', { required: 'Este campo es obligatorio' })}
          error={!!errors?.edition}
          helperText={errors?.edition?.message?.toString()}
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
        <TextField
          id="numGroup"
          label="Número de grupos"
          variant="outlined"
          fullWidth
          {...register('numGroup', { required: 'Este campo es obligatorio' })}
          error={!!errors?.numGroup}
          helperText={errors?.numGroup?.message?.toString()}
        />
        <DialogActions handleClose={handleClose} />
      </Box>
    </>
  );
};

export default ClubForm;
