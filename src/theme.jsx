import { useState, createContext } from "react";


const ThemeContext = createContext({
    theme: '',
    font: '', 
    searchedWord: '',
    changeTheme: () => {},
    changeFont: () => {},
    changeSearchedWord: () => {}
})

export function ThemeContextProvider({children}) {
    const [darkTheme, setDarkTheme] = useState('light');
    const [fontTheme, setFontTheme] = useState('sans serif')
    const [word, setWord] = useState('');

    const toggleTheme = () => {
        setDarkTheme(theme => theme === 'dark' ? 'light' : 'dark')
    }

    const pickFont = (fontValue) => {
        switch(fontValue) {
            case 'sans serif':
                setFontTheme('sans')
                break;
            case 'serif':
                setFontTheme('serif')
                break;
            case 'mono':
                setFontTheme('mono')
                break;
            default:
                setFontTheme('sans')
        }
    }

    const themeContextValue = {
        theme: darkTheme,
        font: fontTheme,
        searchedWord: word,
        changeTheme: toggleTheme,
        changeFont: pickFont,
        changeSearchedWord: setWord
    };

    return(
        <ThemeContext.Provider value={themeContextValue}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;