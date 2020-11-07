import React, {useState, useEffect} from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import {theme} from './theme'
import {ThemeContext} from '../../context/themeContext'


/*Se exporta un componente como provedor de tema, todo hijo podra acceder (una vez consuma el contexto tema)
al tema activado*/
const ThemeProvider = ({ children }) => {
    const [dark, setDark] = useState(false);
  
    const toggleTheme = async () => {
      // Guardo el eatado del dark mode
      await localStorage.setItem("isDarkTheme",!dark)
      setDark(!dark);
    };

    // Hidrato el estado del dark mode desde el local storage
    const checkDarjMode = async () => {
      const darkState = await localStorage.getItem("isDarkTheme")
      if(darkState != null){
        if(darkState) setDark(JSON.parse(darkState));
      }
    }


    useEffect( () => {
        checkDarjMode()
    }, [dark])
  
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