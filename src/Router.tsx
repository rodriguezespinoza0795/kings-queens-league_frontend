import { Route, Routes } from 'react-router-dom';
import { AdminDrawer } from '@/components';
import { ClubCategory, Club, Position } from './Pages';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminDrawer />}>
        <Route path="/" element={<ClubCategory />} />
        <Route path="/club-category" element={<ClubCategory />} />
        <Route path="/club" element={<Club />} />
        <Route path="/position" element={<Position />} />
      </Route>
    </Routes>
  );
};
