import styled from 'styled-components'
import colorTransition from '../../styled/transitions/colorTransition'

// Contenedor del footer
const paddingFooter = "100px"
export const FooterContainer =  styled.footer`
    margin-top:30px;
`

// Contenedor para mi nombre en el footer
export const FooterSignature = styled.p`
    color:${(props) => props.theme.colors.activeColor};
    font-size:20px;
    transition:${colorTransition};
`