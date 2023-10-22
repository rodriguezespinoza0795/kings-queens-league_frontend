import { useNavigate, Outlet } from 'react-router-dom';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Category,
  AddModerator,
  Radar,
  Groups3,
  GroupAdd,
  EmojiEvents,
} from '@mui/icons-material';
import { routesPath } from './AdminDrawer.utils';
import { useGlobal } from '@/context';

const TemporaryDrawer = () => {
  const { open, toggleDrawer } = useGlobal();
  const navigate = useNavigate();

  const getIcon = (name: string) => {
    switch (name) {
      case 'CategoryIcon':
        return <Category />;
      case 'AddModeratorIcon':
        return <AddModerator />;
      case 'RadarIcon':
        return <Radar />;
      case 'Groups3Icon':
        return <Groups3 />;
      case 'GroupAddIcon':
        return <GroupAdd />;
      case 'EmojiEventsIcon':
        return <EmojiEvents />;
    }
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Outlet />
      <Drawer anchor={'right'} open={open} onClose={toggleDrawer(false)}>
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {routesPath.map((item) => (
              <ListItem key={item.key} disablePadding>
                <ListItemButton onClick={() => navigate(item.route)}>
                  <ListItemIcon>{getIcon(item.icon)}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default TemporaryDrawer;
