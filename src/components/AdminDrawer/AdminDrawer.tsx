import { useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import {
  Box,
  Drawer,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Category, Groups, Radar } from '@mui/icons-material';
import { routesPath } from './AdminDrawer.utils';

const TemporaryDrawer = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setOpen(open);
    };

  const getIcon = (name: string) => {
    switch (name) {
      case 'CategoryIcon':
        return <Category />;
      case 'GroupsIcon':
        return <Groups />;
      case 'RadarIcon':
        return <Radar />;
    }
  };

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Menú de administrador</Button>
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
    </div>
  );
};

export default TemporaryDrawer;
