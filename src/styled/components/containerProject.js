import styled from 'styled-components'
import transition from '../transitions/colorTransition'


// Es e contenedor del listado de proyectos
export const paddingimg = "20px"
const margin = "20px"
export default styled.div`
    position:relative;
    overflow:hidden;
    background-color:${props => props.theme.colors.containerImageColor};
    border-radius:10px;
    padding-right:${paddingimg};
    padding-left:${paddingimg};
    padding-top:${paddingimg};
    padding-bottom:${paddingimg};
    margin-bottom:${margin};
    margin-top:${margin};
    transition:${transition};
    

    :hover {
        div.overflow{
           width:calc(100% - 2*${paddingimg});
        }
    }
`