import Header from './components/Header/Header';
import { ThemeContextProvider } from './theme';

const App = () => {
  return (
    <ThemeContextProvider>
      <div className="container p-6">
        <Header />
      </div>
    </ThemeContextProvider>
  );
};

export default App;
