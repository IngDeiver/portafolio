import styled from "styled-components";
import Img from 'gatsby-image'
import shadow from '../components/shadow'

export default styled(Img)`
    margin-Top:90px;
    border-Radius: 50%;
    width: 200px;
    height:200px;
    border: solid 5px white;
    ${shadow};
`