
import styled from 'styled-components'
import colorTransition from '../transitions/colorTransition'
import {margin} from '../components/imageDetailProject'
// Es mi elemento p para escribir texto

export default   styled.div`
  p, h1, h2 {
    color:${(props) => props.theme.colors.activeColor};
    transition:${colorTransition};
    margin-left:${margin};
    margin-right:${margin};
  } 
`;
