import {css} from "styled-components";
const transitionHoverLink =  " all ease .2s"

// Son los estilos aplicados a la etiqueta "a" cuanto esta activo la pagina que corresponde
export default css`
    content:"";
    height:3px;
    width:0%;
    position:absolute;
    bottom:-4px;
    left:0px;
    background-color:${(props) => props.theme.colors.activeColor};
    transition:${transitionHoverLink};
`