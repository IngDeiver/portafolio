import {css} from 'styled-components'
import {xs, sm, md , lg} from './widths'


/*Son los mediaquerys para cambiar el tamaño de la imagen de las skills dependiendo del
tamaño de la pantalla.*/
export default css`

    // xs
    @media only screen and (max-width: ${xs}) {
        
        height:160px;
        width:85px;
    }

    //sm
    @media only screen and (min-width: ${sm})   {
        height:160px;
        width:85px;
    }

    //md
    @media only screen and (min-width: ${md})   {
        
        height:160px;
        width:85px;
    }

    // >lg
    @media only screen and (min-width: ${lg}) {
        height:100px;
        width:100px;
    }

   
`