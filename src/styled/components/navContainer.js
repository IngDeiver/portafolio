import styled from 'styled-components'
import transitionColor from '../transitions/colorTransition'

// Es el contenedor de la barra de navegación con todos sus estilos
const navHorizontalPadding = "40px";
export default styled.nav`
  background-color:${props => props.theme.colors.background};
  transition:${transitionColor};
  padding-left:${navHorizontalPadding};
  padding-right:${navHorizontalPadding};
  box-shadow: 1px 0px 7px 2px rgba(0,0,0,0.3);
  position: fixed; 
  top: 0;
  width:100vw;
  z-index:1000;
`;