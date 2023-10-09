import {
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  Avatar,
} from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TournamentFormProps } from './TournamentForm.types';
import { DialogActions } from '@/components';
import { TournamentRoundInput } from '@/types';
import { get } from 'lodash';
import { useState } from 'react';

const ClubForm = ({
  handleClose,
  handleFunction,
  catalogues,
}: TournamentFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();

  const defaultMatches = (catalogues?.length || 0) / 2;
  const [matches, setMatches] = useState(defaultMatches);

  const onSubmit: SubmitHandler<TournamentRoundInput> = async (data) => {
    handleFunction(data, matches);
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
          label="Numero de partidos"
          variant="outlined"
          fullWidth
          value={matches}
          onChange={(e) =>
            setMatches(e.target.value === '' ? 0 : parseInt(e.target.value, 10))
          }
        />
        <TextField
          id="name"
          label="Número de Jornada"
          variant="outlined"
          fullWidth
          {...register('round', { required: 'Este campo es obligatorio' })}
          error={!!errors?.round}
          helperText={errors?.round?.message?.toString()}
        />
        {[...Array(matches).keys()].map((club) => (
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              width: '100%',
              gap: '20px',
            }}
            key={club}
          >
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-autowidth-label">
                Local
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                autoWidth
                label="Age"
                defaultValue=""
                {...register(`home${club}`, {
                  required: 'Este campo es obligatorio',
                })}
                error={!!get(errors, `home${club}`, '')}
              >
                {catalogues?.map((item) => (
                  <MenuItem value={item.id} key={item.id}>
                    <Avatar
                      alt={item.name}
                      src={item.image}
                      sx={{ width: 20, height: 20 }}
                    />
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-autowidth-label">
                Visitante
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                autoWidth
                label="Age"
                defaultValue=""
                {...register(`away${club}`, {
                  required: 'Este campo es obligatorio',
                })}
                error={!!get(errors, `away${club}`, '')}
              >
                {catalogues?.map((item) => (
                  <MenuItem value={item.id} key={item.id}>
                    <Avatar
                      alt={item.name}
                      src={item.image}
                      sx={{ width: 20, height: 20 }}
                    />
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        ))}
        <DialogActions handleClose={handleClose} />
      </Box>
    </>
  );
};

export default ClubForm;
