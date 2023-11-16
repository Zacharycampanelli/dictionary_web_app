import DefinitionContainer from './components/DefinitionContainer/DefinitionContainer';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import { useContext, useEffect, useState } from 'react';
import ThemeContext from './theme';


const App = () => {
  const themeCtx = useContext(ThemeContext)
  const [renderedFont, setRenderedFont] = useState(themeCtx.font)
  const [colorMode, setColorMode] = useState(themeCtx.theme)
  // Sets the font state to be used for the entire application
  useEffect(() => {
    setRenderedFont(themeCtx.font)
  }, [themeCtx.font])

  
  useEffect(() => {
    setColorMode(themeCtx.theme)
  }, [themeCtx.theme])
  


  return (
  <div className={`${colorMode}`}>
      <div className={`font-${themeCtx.font}`}>
      <div className=' bg-white dark:bg-darkerBlack p-6 h-screen md:p-10 h-max'>
        <div className="lg:w-7/12 lg:m-auto">

        <Header />
        
        <SearchBar />
        <DefinitionContainer />
        </div>
      </div>
      </div></div>
  );
};

export default App;
