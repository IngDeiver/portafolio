
import styled from 'styled-components'
import colorTransition from '../transitions/colorTransition'

// Es mi elemento p para escribir texto
export default   styled.p`
  text-align: justify;
  color:${(props) => props.theme.colors.activeColor};
  transition:${colorTransition};
  margin:auto 20px ;
`;