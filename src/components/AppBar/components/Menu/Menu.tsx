import { Box, Typography, Button } from '@mui/material';
import { MenuProps } from './menu.types';
import { useNavigate } from 'react-router-dom';

const MenuComponent = ({ pages, handleCloseNavMenu }: MenuProps) => {
  const navigate = useNavigate();
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
        {pages.map((page) => (
          <Button
            key={page.name}
            onClick={(e) => {
              navigate(page.route);
              handleCloseNavMenu(e);
            }}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            {page.name}
          </Button>
        ))}
      </Box>
    </>
  );
};

export default MenuComponent;
