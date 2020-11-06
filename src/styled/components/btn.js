import {Link} from 'gatsby'
import styled from 'styled-components'



export default styled(Link)`
  background-color: black; /* Green */
  border: none;
  color: white;
  padding: 10px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius:50px;
  font-family: "Roboto Condensed";
  font-weight:300;
  box-shadow: 1px 0px 7px 2px rgba(0,0,0,0.3);

  &:link, &:visited, &:active {
    text-decoration:none;
    color: white;
  }
  &:hover{
    opacity:.8;
  }
`

