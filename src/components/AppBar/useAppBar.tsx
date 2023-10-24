import { useState } from 'react';
import {
  Category,
  AddModerator,
  Radar,
  Groups3,
  GroupAdd,
  EmojiEvents,
} from '@mui/icons-material';

export const useAppBar = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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

  return {
    handleOpenUserMenu,
    anchorElUser,
    handleCloseUserMenu,
    open,
    getIcon,
  };
};
