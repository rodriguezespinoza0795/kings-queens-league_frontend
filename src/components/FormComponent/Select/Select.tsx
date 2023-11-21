import { Control } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

const SelectComponent = ({
  control,
  name,
  catalogues,
  errors,
  label,
}: {
  control: Control<any>;
  name: string;
  catalogues: any[];
  errors: any;
  label: string;
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
          <FormControl fullWidth error={!!errors?.[name]?.message}>
            <InputLabel id={`${name}select`}>{label}</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={value}
              label={label}
              onChange={onChange}
            >
              {catalogues.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>{errors?.[name]?.message}</FormHelperText>
          </FormControl>
        )}
      />
    </>
  );
};

export default SelectComponent;
