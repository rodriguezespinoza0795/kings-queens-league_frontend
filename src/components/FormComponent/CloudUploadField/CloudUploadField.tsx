import { Controller } from 'react-hook-form';
import { styled } from '@mui/material/styles';
import { Box, Button, Typography, Avatar } from '@mui/material';
import { CloudUploadFieldProps } from './CloudUploadField.types';
import { CloudUpload } from '@mui/icons-material';
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

const CloudUploadField = ({
  control,
  errors,
  watch,
  defaultImage,
}: CloudUploadFieldProps) => {
  return (
    <Box sx={{ width: '100%', display: 'grid', justifyItems: 'flex-start' }}>
      <Controller
        name="image"
        control={control}
        rules={{
          required: 'Este campo es obligatorio',
        }}
        render={({ field: { onChange, value } }) => (
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
              value={value?.fileName}
              onChange={(event) => {
                onChange(event.target.files);
              }}
            />
          </Button>
        )}
      />
      {errors.image && (
        <Typography variant="caption" color={'#d32f2f'}>
          {errors.image.message}
        </Typography>
      )}
      {watch('image') && (
        <Typography variant="subtitle1" textAlign={'center'}>
          {get(watch('image')[0], 'name')}
        </Typography>
      )}
      {defaultImage && (
        <Avatar
          alt="Remy Sharp"
          src={defaultImage}
          sx={{ width: 100, height: 100 }}
        />
      )}
    </Box>
  );
};

export default CloudUploadField;
