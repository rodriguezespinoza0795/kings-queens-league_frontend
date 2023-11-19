import { useState, useMemo } from 'react';
import { GlobalContext } from '@/context';
import { Notification } from '@/components';
import { AlertColor } from '@mui/material';

export const GlobalProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const [msg, setMsg] = useState('');
  const [show, setShow] = useState(false);
  const [severity, setSeverity] = useState<AlertColor | undefined>(undefined);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

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

  const getError = (msg: string) => {
    setSeverity('error');
    setShow(true);
    setMsg(msg);
  };

  const getSuccess = (msg: string) => {
    setSeverity('success');
    setShow(true);
    setMsg(msg);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <GlobalContext.Provider
      value={{
        open,
        toggleDrawer,
        mode,
        colorMode,
        getError,
        getSuccess,
      }}
    >
      <Notification
        handleClose={handleClose}
        open={show}
        severity={severity}
        msg={msg}
      />
      {children}
    </GlobalContext.Provider>
  );
};
