import {lg} from './widths'
import {css} from 'styled-components'

/*Son los mediaquerys para ocultar o mostrar los elemetos dependiendo del
tamaño de la pantalla.*/
export default css`



    @media only screen and (max-width: ${lg}) {
        ul.show-md{
            display:none;
        }
        a.show-md {
            display:none;
        }
    }

    @media only screen and (min-width: ${lg}) {
        i.drawerBtn{
            display:none;
        }
    }
`
