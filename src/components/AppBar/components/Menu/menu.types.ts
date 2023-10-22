export type MenuProps = {
  pages: { name: string, route: string }[];
  handleCloseNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
};
