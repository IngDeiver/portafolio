import {xs, sm, md , lg} from './widths'
import {css} from 'styled-components'

export default css`
     @media only screen and (max-width: ${lg}) {
        ul,  a{
            display:none;
        }
    }
`
