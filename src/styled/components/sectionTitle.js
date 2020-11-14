import styled from "styled-components";

const hrWidth = "50px"
export default styled.h4`
    color: ${props => props.theme.colors.linkItemColor};
    display:block;
    position: relative;
    font-family: "Roboto Condensed";
    font-weight:400;

    ::before{
        position:absolute;
        content:"";
        width:${hrWidth};
        height:2px;
        background-color: ${props => props.theme.colors.linkItemColor};
        left:calc(-10px - ${hrWidth});
        bottom:45%;
    }

    ::after{
        position:absolute;
        content:"";
        width:${hrWidth};
        height:2px;
        background-color: ${props => props.theme.colors.linkItemColor};
        right:calc(-10px - ${hrWidth});
        bottom:45%;
    }
`