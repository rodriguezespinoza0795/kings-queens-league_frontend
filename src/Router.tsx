import { Route, Routes } from 'react-router-dom';
import { AdminDrawer, AppBar } from '@/components';
import {
  ClubCategory,
  Club,
  Position,
  PlayerType,
  Player,
  Tournament,
  TournamentAdmin,
  TopPlayers,
  Login,
  RecoveryPassword,
  SignUp,
} from './Pages';
import { useIsLoggedIn } from '@/hooks';

export const AppRouter = () => {
  const { isLoggedIn } = useIsLoggedIn();

  return (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route path="/" element={<TopPlayers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/recovery-password" element={<RecoveryPassword />} />
        {isLoggedIn && (
          <Route path="/admin" element={<AdminDrawer />}>
            <Route path="/admin" element={<Tournament />} />
            <Route path="/admin/tournament" element={<Tournament />} />
            <Route path="/admin/club-category" element={<ClubCategory />} />
            <Route path="/admin/club" element={<Club />} />
            <Route path="/admin/position" element={<Position />} />
            <Route path="/admin/player-type" element={<PlayerType />} />
            <Route path="/admin/player" element={<Player />} />
            <Route path="/admin/tournament/:id" element={<TournamentAdmin />} />
            <Route path="/admin/*" element={<Tournament />} />
          </Route>
        )}
        <Route path="*" element={<TopPlayers />} />
      </Route>
    </Routes>
  );
};
