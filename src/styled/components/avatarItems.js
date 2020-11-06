import styled from "styled-components"
import colorTransition from '../../styled/transitions/colorTransition'


/*Componentes del avatar
TitleAvatar. Es mi nombre
SubtitleAvatar: Es la profesión*/

export const TitleAvatar = styled.h2`
    color:${(props) => props.theme.colors.activeColor};
    transition:${colorTransition};
`;
export const SubtitleAvatar = styled.h4`
    /*Donde se encuentra esta propiedad es por que se tiene acceso al tema por medio del themeProvider
    razon por la cual se puede acceder a los colores correspondientes para el tema.*/
    color:${(props) => props.theme.colors.activeColor};
    transition:${colorTransition};
    margin:0px;
    padding:0px;
`;