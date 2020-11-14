import styled from "styled-components";
import shadow from '../components/shadow'
import transition from '../transitions/colorTransition'

const margin = "5px"
export const radius = "5px"
export default styled.div`
    ${shadow};
    position: relative;
    padding:5px;
    margin:${margin};
    border-radius:${radius};
    background-color:${props => props.theme.colors.containerImageColor};
    transition:${transition};

    &:hover {
        div.overflow {
            height:100%;
        }
    }
`
