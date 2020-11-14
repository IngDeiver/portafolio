import {css} from 'styled-components'
import {xs, sm, md , lg} from './widths'


/*Son los mediaquerys para cambiar el tamaño del texto de la pagina d404 dependiendo del
tamaño de la pantalla.*/
export default css`

    // xs
    @media only screen and (max-width: ${xs}) {
        text-align: center;

    }

    //sm
    @media only screen and (min-width: ${sm})   {
        text-align: center;
    }

    //md
    @media only screen and (min-width: ${md})   {
        text-align: center;
       
    }

    // >lg
    @media only screen and (min-width: ${lg}) {
        text-align:start;
    }

   
`