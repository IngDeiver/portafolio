import styled from 'styled-components'
import Img from 'gatsby-image'
import shadow from '../components/shadow'


// Es la imagen para la lista de proyectos

export const radius ="10px"
export default styled(Img)`
    border-radius:${radius};
    width:100%;
    ${shadow};
`