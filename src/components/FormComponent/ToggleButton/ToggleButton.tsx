import { Control } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import {
  ToggleButton,
  ToggleButtonGroup,
  Avatar,
  Typography,
} from '@mui/material';

const ToggleButtonComponent = ({
  control,
  name,
  catalogues,
  errors,
}: {
  control: Control<any>;
  name: string;
  catalogues: any[];
  errors: any;
}) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={{
          required: 'Este campo es obligatorio',
        }}
        render={({ field: { onChange, value } }) => (
          <ToggleButtonGroup
            color="primary"
            value={value}
            exclusive
            aria-label="Platform"
            onChange={(_, value) => {
              onChange(value);
            }}
          >
            {catalogues?.map((item) => (
              <ToggleButton value={item.id} key={item.id}>
                <Avatar alt={item.name} src={item.image} />
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        )}
      />
      {errors?.[name] && (
        <Typography variant="caption" color={'#d32f2f'}>
          {errors?.[name].message}
        </Typography>
      )}
    </>
  );
};

export default ToggleButtonComponent;
