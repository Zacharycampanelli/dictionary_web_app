/**
 * App component serves as the main container for the application.
 * It includes the Header, SearchBar, and DefinitionContainer components,
 * and manages the global theme and font states using the ThemeContext.
 */
import { useContext, useEffect, useState } from 'react';

import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import DefinitionContainer from './components/DefinitionContainer/DefinitionContainer';
import ThemeContext from './theme';

const App = () => {
  // Accessing the ThemeContext to get and modify theme-related information
  const themeCtx = useContext(ThemeContext);

  // States to manage the rendered font, color mode, and empty search state
  const [renderedFont, setRenderedFont] = useState(themeCtx.font);
  const [colorMode, setColorMode] = useState(themeCtx.theme);
  const [emptySearch, setEmptySearch] = useState(false);

  // Updates the font state when the theme changes
  useEffect(() => {
    setRenderedFont(themeCtx.font);
  }, [themeCtx.font]);

  // Updates the color mode state when the theme changes
  useEffect(() => {
    setColorMode(themeCtx.theme);
  }, [themeCtx.theme]);

  // Render the main App component with Header, SearchBar, and DefinitionContainer
  return (
    <div className={`${colorMode}`}>
      <div className={`font-${renderedFont}`}>
        <div className=" bg-white dark:bg-darkerBlack p-6 h-screen md:p-10 h-max">
          <div className="lg:w-7/12 lg:m-auto">
            <Header />
            <SearchBar emptySearch={emptySearch} setEmptySearch={setEmptySearch} />
            <DefinitionContainer emptySearch={emptySearch} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App; 
