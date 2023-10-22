import { useState } from 'react';

export const usePasswordField = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return {
    showPassword,
    handleClickShowPassword
  };

}
