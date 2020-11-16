import styled from 'styled-components'
import transition from '../transitions/colorTransition'
import mediaquerys from '../mediaquerys/detailProjectOverflowMediquery'
import {radius} from '../components/imageDetailProject'
import {margin} from '../components/imageDetailProject'

export default styled.div`
    position: absolute;
    bottom:${margin};
    left:${margin};
    width:0px;;
    height:calc(100% - 2*${margin});
    overflow:hidden;
    background-color:rgba(0,0,0,0.5);
    border-radius:${radius};
    transition:${transition};

    ${mediaquerys};
`