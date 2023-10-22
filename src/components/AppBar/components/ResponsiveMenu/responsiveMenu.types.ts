export type ResponsiveMenuProps = {
  pages: { name: string, route: string }[];
  handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
  anchorElNav: null | HTMLElement;
  handleCloseNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
};
