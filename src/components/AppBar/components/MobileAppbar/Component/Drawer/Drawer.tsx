import { useNavigate } from 'react-router-dom';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  adminRoutesPath,
  publicRoutesPath,
} from '@/components/AppBar/routesMenu.utils';
import { useAppBar } from '@/components/AppBar/useAppBar';
import { useGlobal } from '@/context';
import { useIsLoggedIn } from '@/hooks';
import { useTheme } from '@mui/material/styles';
import { Brightness4, Brightness7 } from '@mui/icons-material';

const TemporaryDrawer = () => {
  const { open, toggleDrawer, colorMode } = useGlobal();
  const { isLoggedIn } = useIsLoggedIn();
  const { getIcon } = useAppBar();
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box sx={{ padding: '20px' }}>
      <Drawer anchor={'left'} open={open} onClose={toggleDrawer(false)}>
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List sx={{ paddingTop: '50px' }}>
            {publicRoutesPath.map((item) => (
              <ListItem key={item.name} disablePadding>
                <ListItemButton onClick={() => navigate(item.route)}>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding>
              <ListItemButton onClick={colorMode.toggleColorMode}>
                <ListItemIcon>
                  {theme.palette.mode === 'dark' ? (
                    <Brightness7 />
                  ) : (
                    <Brightness4 />
                  )}
                </ListItemIcon>
                <ListItemText primary={'Modo Oscuro'} />
              </ListItemButton>
            </ListItem>
            {isLoggedIn && (
              <>
                <Divider />
                {adminRoutesPath.map((item) => (
                  <ListItem key={item.key} disablePadding>
                    <ListItemButton onClick={() => navigate(item.route)}>
                      <ListItemIcon>{getIcon(item.icon)}</ListItemIcon>
                      <ListItemText primary={item.label} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </>
            )}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default TemporaryDrawer;
