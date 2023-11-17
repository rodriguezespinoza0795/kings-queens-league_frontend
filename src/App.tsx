import { AppRouter } from './Router';
import { GlobalProvider } from '@/context';
import { ThemeConfig } from '../config/theme.config';

function App() {
  return (
    <GlobalProvider>
      <ThemeConfig>
        <AppRouter />
      </ThemeConfig>
    </GlobalProvider>
  );
}

export default App;
