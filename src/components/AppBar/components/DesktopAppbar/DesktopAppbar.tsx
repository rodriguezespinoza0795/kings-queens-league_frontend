import { Box, Typography, Button, MenuItem, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  KeyboardArrowDown,
  Brightness4,
  Brightness7,
} from '@mui/icons-material';
import {
  publicRoutesPath,
  adminRoutesPath,
} from '@/components/AppBar/routesMenu.utils';
import { useIsLoggedIn } from '@/hooks';
import { useAppBar } from '@/components/AppBar/useAppBar';
import { StyledMenu } from './components';
import { useDesktopAppBar } from './useDestopAppbar';
import { useGlobal } from '@/context';
import { useTheme } from '@mui/material/styles';

const MenuComponent = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useIsLoggedIn();
  const theme = useTheme();
  const { colorMode } = useGlobal();
  const { getIcon } = useAppBar();
  const { handleClick, anchorEl, open, handleClose } = useDesktopAppBar();

  return (
    <>
      <Typography
        variant="h6"
        noWrap
        sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        DRE
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {publicRoutesPath.map((page) => (
          <Button
            key={page.name}
            onClick={() => {
              navigate(page.route);
            }}
            disableElevation
            variant="contained"
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            {page.name}
          </Button>
        ))}
        {isLoggedIn && (
          <>
            <Button
              variant="contained"
              disableElevation
              onClick={handleClick}
              endIcon={<KeyboardArrowDown />}
              sx={{ my: 2 }}
            >
              Administrador
            </Button>
            <StyledMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
              {adminRoutesPath.map((item) => (
                <MenuItem
                  key={item.key}
                  disableRipple
                  onClick={() => {
                    handleClose();
                    navigate(item.route);
                  }}
                >
                  {getIcon(item.icon)}
                  {item.label}
                </MenuItem>
              ))}
            </StyledMenu>
          </>
        )}
        <IconButton
          sx={{ ml: 1 }}
          onClick={colorMode.toggleColorMode}
          color="inherit"
        >
          {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Box>
    </>
  );
};

export default MenuComponent;
