import styled from 'styled-components'
import {Link} from 'gatsby'
import transitionColor from '../transitions/colorTransition'


const transitionHoverLink =  " all ease .2s"

export const Links = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  li {
    float:left;
   }
`;

export const Linkitem = styled(Link)`
  display: block;
  color: ${props => props.theme.colors.linkItemColor};
  transition:${transitionColor};
  text-align: center;
  position: relative;
  margin:10px;

  &:link, &:visited, &:active {
    text-decoration:none;
    color: ${props => props.theme.colors.linkItemColor};
  }

  &::after{
      content:"";
      height:3px;
      width:0%;
      position:absolute;
      bottom:-4px;
      left:0px;
      background-color:${(props) => props.theme.colors.activeColor};
      transition:${transitionHoverLink};
  }

  &:hover{
    &::after{
      width:100%;
    }
  }
`;