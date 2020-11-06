import React, {useState} from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import {theme} from './theme'
import {ThemeContext} from '../../context/themeContext'


/*Se exporta un componente como provedor de tema, todo hijo podra acceder (una vez consuma el contexto tema)
al tema activado*/
const ThemeProvider = ({ children }) => {
    const [dark, setDark] = useState(false);
  
    const toggleTheme = () => {
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