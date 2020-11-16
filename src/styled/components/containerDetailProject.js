import styled from 'styled-components'
import transition from '../transitions/colorTransition'


// Es e contenedor del  detalle de proyectos
export const paddingimg = "50px"
export default styled.div`
    background-color:${props => props.theme.colors.containerImageColor};
    border-radius:10px;
    transition:${transition};
`