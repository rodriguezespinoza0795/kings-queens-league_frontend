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

const TemporaryDrawer = () => {
  const { open, toggleDrawer } = useGlobal();
  const { isLoggedIn } = useIsLoggedIn();
  const { getIcon } = useAppBar();
  const navigate = useNavigate();

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
