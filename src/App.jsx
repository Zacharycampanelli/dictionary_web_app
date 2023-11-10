import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import { ThemeContextProvider } from './theme';

const App = () => {
  return (
    <ThemeContextProvider>
      <div className=" p-6">
        <Header />
        <SearchBar />
      </div>
    </ThemeContextProvider>
  );
};

export default App;
