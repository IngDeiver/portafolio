import styled from "styled-components";
import {margin} from '../components/imageDetailProject'

export default styled.div`
    position:relative;
    overflow:hidden;

    :hover {
        div.overflow{
           width:calc(100% - 2*${margin});
        }
    }
`