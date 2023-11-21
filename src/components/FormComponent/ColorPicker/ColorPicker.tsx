import { Control } from 'react-hook-form';
import { Controller } from 'react-hook-form';

const TextFieldComponent = ({
  control,
  name,
}: {
  control: Control<any>;
  name: string;
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <input
          value={value}
          type="color"
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    />
  );
};

export default TextFieldComponent;
