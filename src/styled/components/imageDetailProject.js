import styled from 'styled-components'
import Img from 'gatsby-image'
import shadow from '../components/shadow'
import mediaquery from '../mediaquerys/imageDetailProjectMediaquery'
import transition from '../transitions/colorTransition'

// Es la imagen para el  detalle de proyectos

export const radius ="20px"
export const paddingimg = "20px"
export const margin = "20px"

export default styled(Img)`
    border-radius:${radius};
    padding:${paddingimg};
    margin:${margin};
    transition:${transition};
    ${shadow};
    /* ${mediaquery}; */
`