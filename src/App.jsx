import { ThemeProvider } from 'styled-components';
import Book from '@/components/Book';
import { theme } from '@/common/constants/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Book />
    </ThemeProvider>
  );
}

export default App;
