import { useState, useContext, createContext } from "react";


const ThemeContext = createContext({
    theme: '',
    font: ''
})

export function ThemeContextProvider({children}) {
    const [darkTheme, setDarkTheme] = useState('light');
    const [fontTheme, setFontTheme] = useState('sans serif')

    const toggleTheme = () => {
        setDarkTheme(theme => theme === 'dark' ? 'light' : 'dark')
    }

    const setTheme = (fontValue) => {
        switch(fontValue) {
            case 'sans serif':
                setFontTheme('sans serif')
                break;
            case 'sserif':
                setFontTheme('serif')
                break;
            case 'mono':
                setFontTheme('mono')
                break;
            default:
                setFontTheme('sans serif')
        }
    }

    const themeContextValue = {
        theme: darkTheme,
        font: fontTheme
    };

    return(
        <ThemeContext.Provider value={themeContextValue}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;