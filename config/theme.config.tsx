import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { useGlobal } from '@/context';

type ThemeProp = {
  children: JSX.Element;
};

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
  const { mode } = useGlobal();
  const theme = createTheme({
    palette: {
      mode: mode,
    },
    components: {
      MuiAvatar: {
        defaultProps: {
          imgProps: {
            sx: {
              objectFit: 'contain',
            },
          },
        },
      },
      MuiDrawer: {
        defaultProps: {
          PaperProps: {
            sx: {
              minWidth: '200px',
            },
          },
        },
      },
      MuiDialog: {
        defaultProps: {
          PaperProps: {
            sx: {
              minWidth: '400px',
            },
          },
        },
      },
      MuiDialogTitle: {
        defaultProps: {
          sx: {
            alignSelf: 'center',
          },
        },
      },
      MuiButton: {
        defaultProps: {
          sx: {
            minWidth: '150px',
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
