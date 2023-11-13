import DefinitionContainer from './components/DefinitionContainer/DefinitionContainer';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import { useContext, useEffect, useState } from 'react';
import ThemeContext from './theme';


const App = () => {
  const themeCtx = useContext(ThemeContext)
  const [renderedFont, setRenderedFont] = useState(themeCtx.font)

  // Sets the font state to be used for the entire application
  useEffect(() => {
    setRenderedFont(themeCtx.font)
  }, [themeCtx.font])
  
  return (
      <div className={`font-${renderedFont} p-6`}>
        <Header />
        <SearchBar />
        <DefinitionContainer />
      </div>
  );
};

export default App;
