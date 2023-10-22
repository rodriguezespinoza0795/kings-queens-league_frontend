import { useState } from 'react';
import { GlobalContext } from '@/context';

export const GlobalProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
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

  return (
    <GlobalContext.Provider
      value={{
        open,
        toggleDrawer,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
