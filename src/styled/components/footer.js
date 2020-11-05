import styled from 'styled-components'
import colorTransition from '../../styled/transitions/colorTransition'


export const FooterContainer =  styled.footer`
    margin-top:50px;
    width:98vw;
`

export const FooterSignature = styled.p`
    color:${(props) => props.theme.colors.activeColor};
    font-size:20px;
    transition:${colorTransition};
`