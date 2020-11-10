
import {css} from 'styled-components'
import trasintionColor from '../../styled/transitions/colorTransition'

export default css`
  /*Donde se encuentra esta propiedad es por que se tiene acceso al tema por medio del themeProvider
    razon por la cual se puede acceder a los colores correspondientes para el tema.*/
  color:${(props) => props.theme.colors.activeColor};
  transition:${trasintionColor};
  width:${props => props.$lg ? "25px ": "20px"};
  margin-left:5px;
  margin-right:5px;
  text-decoration:none;
`