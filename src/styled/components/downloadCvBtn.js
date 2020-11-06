import styled from 'styled-components'
import transitionColor from '../transitions/colorTransition'


// Boton para descargar mi hoja de vida
export default   styled.a`
margin-left:10px;
&:link, &:visited, &:active {
  text-decoration:none;
  color:${props => props.theme.colors.activeColor};
}
color:${props => props.theme.colors.activeColor};
font-weight:400;
transition: ${transitionColor};

`;