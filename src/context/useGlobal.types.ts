export interface Global {
  open: boolean;
  toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void
  mode: 'light' | 'dark'
  colorMode: { toggleColorMode: () => void }
  getError: (msg: string) => void
  getSuccess: (msg: string) => void
}
