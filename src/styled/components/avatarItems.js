import styled from "styled-components"
import colorTransition from '../../styled/transitions/colorTransition'

export const TitleAvatar = styled.h2`
    color:${(props) => props.theme.colors.activeColor};
    transition:${colorTransition};
`;
export const SubtitleAvatar = styled.h4`
    color:${(props) => props.theme.colors.activeColor};
    transition:${colorTransition};
    margin:0px;
    padding:0px;
`;