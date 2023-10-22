import { isNil } from 'lodash';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

export const useIsLoggedIn = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  let isLoggedIn = false;

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
    location.reload();
  };

  if (!isNil(token)) {
    const decoded: { exp: number; } = jwtDecode(token);

    if (!isNil(decoded)) {
      const currentTime = new Date().getTime() / 1000;
      isLoggedIn = decoded.exp >= currentTime;

      !isLoggedIn && handleLogout();
    }
  }

  return {
    isLoggedIn,
    handleLogout,
  };
};
