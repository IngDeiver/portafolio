
import styled from 'styled-components'
import trasintionColor from '../../styled/transitions/colorTransition'

export default styled.i`
  /*Donde se encuentra esta propiedad es por que se tiene acceso al tema por medio del themeProvider
    razon por la cual se puede acceder a los colores correspondientes para el tema.*/
  color:${(props) => props.theme.colors.activeColor};
  transition:${trasintionColor};
  font-size:${props => props.$lg ? "25px ": "20px"};
  margin-left:10px;
  &:hover{
    cursor: pointer;
  }
`