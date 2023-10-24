import { Box, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from './Component/Drawer';
import { useGlobal } from '@/context';

const MobileAppbar = () => {
  const { toggleDrawer } = useGlobal();
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      </Box>
      <Drawer />
      <Typography
        variant="h5"
        noWrap
        sx={{
          mr: 2,
          display: { xs: 'flex', md: 'none' },
          flexGrow: 1,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        DRE
      </Typography>
    </>
  );
};

export default MobileAppbar;
