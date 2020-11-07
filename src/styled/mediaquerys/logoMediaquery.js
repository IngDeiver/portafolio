import {css} from 'styled-components'
import {xs, sm, md , lg} from './widths'


/*Son los mediaquerys para cambiar el tamalo de mi logo dependiendo del
tamaño de la pantalla.*/
export default css`

    // xs
    @media only screen and (max-width: ${xs}) {
        &{
            width:55%;
        }
    }

    //sm
    @media only screen and (min-width: ${sm})   {
        &{
            width:50%;
        }
    }

    //md
    @media only screen and (min-width: ${md})   {
        
        &{
            width:100%;
        }
    }

    // >lg
    @media only screen and (min-width: ${lg}) {
        &{
            width:70%;
        }
    }

   
`