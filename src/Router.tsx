import { Route, Routes } from 'react-router-dom';
import { AdminDrawer } from '@/components';
import {
  ClubCategory,
  Club,
  Position,
  PlayerType,
  Player,
  Tournament,
  TournamentAdmin,
} from './Pages';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminDrawer />}>
        <Route path="/" element={<ClubCategory />} />
        <Route path="/club-category" element={<ClubCategory />} />
        <Route path="/club" element={<Club />} />
        <Route path="/position" element={<Position />} />
        <Route path="/player-type" element={<PlayerType />} />
        <Route path="/player" element={<Player />} />
        <Route path="/tournament" element={<Tournament />} />
        <Route path="/tournament/:id" element={<TournamentAdmin />} />
      </Route>
    </Routes>
  );
};
