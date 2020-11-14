import styled from 'styled-components'
import {radius} from './cardSkillContainer'
import transition from '../transitions/colorTransition'
import mediaquerys from '../mediaquerys/descriptionSkillMediaquery'


export default styled.div`
    position: absolute;
    bottom:0px;
    width:100%;
    height:0px;
    overflow:hidden;
    background-color:rgba(0,0,0,0.8);
    border-radius:${radius};
    transition:${transition};

    ${mediaquerys};
`