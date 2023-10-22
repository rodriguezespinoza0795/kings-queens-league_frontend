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
import { useNavigate, useLocation } from 'react-router-dom';
import { AdminMenuProps } from './AdminMenu.types';
import { useIsLoggedIn } from '@/hooks';
import { useGlobal } from '@/context';

const AdminMenu = ({
  handleOpenUserMenu,
  anchorElUser,
  handleCloseUserMenu,
}: AdminMenuProps) => {
  const navigate = useNavigate();
  const { isLoggedIn, handleLogout } = useIsLoggedIn();
  const { toggleDrawer } = useGlobal();
  const { pathname } = useLocation();

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
            {pathname.split('/')[1] === 'admin' ? (
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center" onClick={toggleDrawer(true)}>
                  Admin
                </Typography>
              </MenuItem>
            ) : (
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography
                  textAlign="center"
                  onClick={() => navigate('/admin/tournament')}
                >
                  Admin
                </Typography>
              </MenuItem>
            )}
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center" onClick={handleLogout}>
                Salir
              </Typography>
            </MenuItem>
          </Menu>
        </Box>
      ) : (
        <Button
          variant="outlined"
          sx={{ color: 'white' }}
          onClick={() => navigate('/login')}
        >
          Iniciar sesión
        </Button>
      )}
    </>
  );
};

export default AdminMenu;
