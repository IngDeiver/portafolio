import React, {useState} from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import {theme} from './theme'
import {ThemeContext} from '../../context/themeContext'

const ThemeProvider = ({ children }) => {
    const [dark, setDark] = useState(false);
  
    const toggleTheme = () => {
      console.log(!dark);
      setDark(!dark);
    };
  
    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme: dark,
          toggleTheme,
        }}
      >
        <StyledThemeProvider theme={dark ? theme.dark : theme.light}>
          {children}
        </StyledThemeProvider>
      </ThemeContext.Provider>
    );
  };
  
  export default ThemeProvider;