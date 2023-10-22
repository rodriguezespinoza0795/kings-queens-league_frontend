import { AppBar, Box, Toolbar, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useAppBar } from './useAppBar';
import { ResponsiveMenu, MenuComponent, AdminMenu } from './components';

const pages = [{ name: 'Estadísticas', route: '/' }];

const ResponsiveAppBar = () => {
  const {
    handleOpenNavMenu,
    anchorElNav,
    handleCloseNavMenu,
    handleOpenUserMenu,
    anchorElUser,
    handleCloseUserMenu,
  } = useAppBar();

  return (
    <Box>
      <AppBar component="nav">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <ResponsiveMenu
              pages={pages}
              handleOpenNavMenu={handleOpenNavMenu}
              anchorElNav={anchorElNav}
              handleCloseNavMenu={handleCloseNavMenu}
            />
            <MenuComponent
              pages={pages}
              handleCloseNavMenu={handleCloseNavMenu}
            />
            <AdminMenu
              handleOpenUserMenu={handleOpenUserMenu}
              anchorElUser={anchorElUser}
              handleCloseUserMenu={handleCloseUserMenu}
            />
          </Toolbar>
        </Container>
      </AppBar>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'grid',
          gridTemplateRows: 'min-content 1fr',
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};
export default ResponsiveAppBar;
