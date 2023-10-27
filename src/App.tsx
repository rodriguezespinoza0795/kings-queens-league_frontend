import { AppRouter } from './Router';
import { GlobalProvider } from '@/context';

function App() {
  return (
    <GlobalProvider>
      <AppRouter />
    </GlobalProvider>
  );
}

export default App;
