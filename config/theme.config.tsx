import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';

type ThemeProp = {
  children: JSX.Element;
};

const theme = createTheme({
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

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
