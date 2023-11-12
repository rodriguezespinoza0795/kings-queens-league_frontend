import { Route, Routes } from 'react-router-dom';
import { AppBar } from '@/components';
import {
  ClubCategory,
  Club,
  ClubPresident,
  Position,
  PlayerType,
  Player,
  Tournament,
  TournamentAdmin,
  TopPlayers,
  Login,
  SignUp,
  Home,
  TournamentSimulator,
} from './Pages';
import { useIsLoggedIn } from '@/hooks';

export const AppRouter = () => {
  const { isLoggedIn } = useIsLoggedIn();

  return (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route path="/" element={<Home />} />
        <Route path="/top-players" element={<TopPlayers />} />
        <Route path="/top-players" element={<TopPlayers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/tournament-simulator" element={<TournamentSimulator />} />
        {isLoggedIn && (
          <>
            <Route path="/admin" element={<Tournament />} />
            <Route path="/admin/tournament" element={<Tournament />} />
            <Route path="/admin/club-category" element={<ClubCategory />} />
            <Route path="/admin/club" element={<Club />} />
            <Route path="/admin/club-president" element={<ClubPresident />} />
            <Route path="/admin/position" element={<Position />} />
            <Route path="/admin/player-type" element={<PlayerType />} />
            <Route path="/admin/player" element={<Player />} />
            <Route path="/admin/tournament/:id" element={<TournamentAdmin />} />
            <Route path="/admin/*" element={<Tournament />} />
          </>
        )}
        <Route path="*" element={<TopPlayers />} />
      </Route>
    </Routes>
  );
};
