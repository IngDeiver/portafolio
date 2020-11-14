import styled from 'styled-components'
import Img from 'gatsby-image'
import shadow from '../components/shadow'
import transition from '../transitions/colorTransition'
import mediaquerys from '../mediaquerys/imageSkillMediaquery'


export const radius ="50%"
export default styled(Img)`
    border-radius:${radius};
    height:100px;
    width:100px;
    ${shadow};
    margin-top:10px;
    border: solid 2px white;
    transition:${transition};
    ${mediaquerys};
`