import {
  Box,
  IconButton,
  Typography,
  Menu,
  Avatar,
  Tooltip,
  MenuItem,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useIsLoggedIn } from '@/hooks';
import { useAppBar } from '../../useAppBar';

const AdminMenu = () => {
  const { handleOpenUserMenu, anchorElUser, handleCloseUserMenu } = useAppBar();
  const navigate = useNavigate();
  const { isLoggedIn, handleLogout } = useIsLoggedIn();

  return (
    <>
      {isLoggedIn ? (
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center" onClick={handleLogout}>
                Salir
              </Typography>
            </MenuItem>
          </Menu>
        </Box>
      ) : (
        <Button
          sx={{ color: 'white' }}
          onClick={() => navigate('/login')}
          disableElevation
          variant="contained"
        >
          Iniciar sesión
        </Button>
      )}
    </>
  );
};

export default AdminMenu;
