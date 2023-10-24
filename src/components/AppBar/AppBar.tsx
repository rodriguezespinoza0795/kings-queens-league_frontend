import { AppBar, Box, Toolbar, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { MobileAppbar, DesktopAppbar, AdminMenu } from './components';

const ResponsiveAppBar = () => {
  return (
    <Box>
      <AppBar component="nav">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <MobileAppbar />
            <DesktopAppbar />
            <AdminMenu />
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
