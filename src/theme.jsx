/**
 * ThemeContext is a React context that manages global theme-related states, such as theme type, font type,
 * the currently searched word, and the returned word.
 * It provides a context provider, ThemeContextProvider, that wraps the entire application and
 * makes these states and their update functions available to its child components.
 */

import { useState, createContext } from "react";

/**
 * getUserPreference is a utility function that retrieves the user's color scheme preference based on their system settings.
 * @returns {string} - The user's preferred color scheme ('light' or 'dark').
 */
const getUserPreference = () => {
  // Check the user's preferred color scheme using the matchMedia API
  let choice = window.matchMedia("(prefers-color-scheme:dark)").matches;
  // Assign 'dark' if true, otherwise 'light'
  let chosenTheme = choice === true ? 'dark' : 'light';
  return chosenTheme;
};

// Creating the initial context with default values and update functions
const ThemeContext = createContext({
  theme: '',
  font: '', 
  searchedWord: '',
  returnedWord: '',
  changeTheme: () => {},
  changeFont: () => {},
  changeSearchedWord: () => {},
  changeReturnedWord: () => {},
});

// ThemeContextProvider is a wrapper component that provides the theme-related context to its children
export function ThemeContextProvider({ children }) {
  // States for managing dark theme, font type, searched word, and returned word
  const [darkTheme, setDarkTheme] = useState(getUserPreference());
  const [fontTheme, setFontTheme] = useState('mono');
  const [word, setWord] = useState('');
  const [resultWord, setResultWord] = useState('');

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setDarkTheme(theme => theme === 'dark' ? 'light' : 'dark');
  };

  // Function to set the font type based on user selection
  const pickFont = (fontValue) => {
    switch(fontValue) {
      case 'sans serif':
        setFontTheme('sans');
        break;
      case 'serif':
        setFontTheme('serif');
        break;
      case 'mono':
        setFontTheme('mono');
        break;
      default:
        setFontTheme('sans');
    }
  };

  // Context value containing the current state and update functions
  const themeContextValue = {
    theme: darkTheme,
    font: fontTheme,
    searchedWord: word,
    returnedWord: resultWord,
    changeTheme: toggleTheme,
    changeFont: pickFont,
    changeSearchedWord: setWord,
    changeReturnedWord: setResultWord
  };

  // Providing the context value to the entire application
  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext; 
