import styled from 'styled-components'
import transitionColor from '../transitions/colorTransition'

// styled components
const navHorizontalPadding = "40px";
export default styled.div`
  background-color:${props => props.theme.colors.background};
  transition:${transitionColor};
  padding-left:${navHorizontalPadding};
  padding-right:${navHorizontalPadding};
`;