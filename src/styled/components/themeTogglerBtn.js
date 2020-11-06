import { Moon, Sun } from '@styled-icons/fa-solid';
import React, { useContext } from 'react';
import Switch from 'react-switch';
import styled from 'styled-components';
import { ThemeContext } from '../../context/themeContext';

// Es el boton (Switch) que activa y desactiva el modo oscuro

// Colores
const SWITCH_SUN_COLOR = "#F1C40F"
const SWITCH_MOON_COLOR = "#000000"
const SUN_ICON_COLOR = "#FFFFFF";
const MOON_ICON_COLOR = "#FFFFFF";

const Icon = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SunIcon = styled(Sun)`
  color:${SUN_ICON_COLOR};
`;

const MoonIcon = styled(Moon)`
  color: ${MOON_ICON_COLOR};
`;

const ThemeToggler = () => {
  
  // accedo a las propiedades de contexto  tema
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <Switch
      onChange={toggleTheme}
      checked={isDarkTheme}
      handleDiameter={20}
      checkedIcon={
        <Icon>
          <SunIcon size="20px" />
        </Icon>
      }
      onColor={SWITCH_SUN_COLOR}
      uncheckedIcon={
        <Icon>
          <MoonIcon size="20px" />
        </Icon>
      }
      offColor={SWITCH_MOON_COLOR}
    />
  );
};

export default ThemeToggler;