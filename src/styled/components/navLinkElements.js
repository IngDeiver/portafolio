import styled from 'styled-components'
import {Link} from 'gatsby'
import transitionColor from '../transitions/colorTransition'
import activeLink from '../components/activeLink'
// Son los elementos que conforman la barra de navegación



// Es un ul con stylos para contener etiquetas a
export const Links = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  li {
    float:left;
   }
`;

// Es un link de gatsby perzonalizado con estilos para agregarlo a la barra de navegación
export const Linkitem = styled(Link)`
  display: block;
  color: ${props => props.theme.colors.linkItemColor};
  transition:${transitionColor};
  text-align: center;
  position: relative;
  margin:10px;

  &:link, &:visited, &:active {
    text-decoration:none;
    /*Donde se encuentra esta propiedad es por que se tiene acceso al tema por medio del themeProvider
    razon por la cual se puede acceder a los colores correspondientes para el tema.*/
    color: ${props => props.theme.colors.linkItemColor};
  }

  //Borde inferior animado al hacer hover
  &::after{
     ${activeLink};
  }

  &.active {
        &::after{
            ${activeLink};
            width:100%;
        }
    }

  &:hover{
    &::after{
      width:100%;
    }
  }
`;