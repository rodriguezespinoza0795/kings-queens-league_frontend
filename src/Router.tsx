import { Route, Routes } from 'react-router-dom';
import { AdminDrawer } from '@/components';
import { ClubCategory, Club } from './Pages';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminDrawer />}>
        <Route path="/" element={<ClubCategory />} />
        <Route path="/club-category" element={<ClubCategory />} />
        <Route path="/club" element={<Club />} />
      </Route>
    </Routes>
  );
};
