import {css} from 'styled-components'
import {xs, sm, md , lg} from './widths'


/*Son los mediaquerys para cambiar el tamaño del texto de la pagina d404 dependiendo del
tamaño de la pantalla.*/
export default css`

    // xs
    @media only screen and (max-width: ${xs}) {
      

    }

    //sm
    @media only screen and (min-width: ${sm})   {
      
    }

    //md
    @media only screen and (min-width: ${md})   {
      
       
    }

    // >lg
    @media only screen and (min-width: ${lg}) {
        
    }

   
`