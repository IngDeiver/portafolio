
import styled from 'styled-components'
import colorTransition from '../transitions/colorTransition'


export default   styled.p`
  text-align: justify;
  color:${(props) => props.theme.colors.activeColor};
  transition:${colorTransition};
  margin:auto 20px ;
`;
