
import {createContext} from 'react'


/*Tema global a nivel de aplicación  para controlar el modo oscuro
isDarkTheme: Es true si el modo osucro esta activado
toggleTheme: Es al función encargada de cambiar el estado del modo oscuro*/

export const ThemeContext = createContext({
    isDarkTheme: false,
    toggleTheme: () => {}
});