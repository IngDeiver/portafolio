import {css} from 'styled-components'
import {xs, sm, md , lg} from './widths'


/*Son los mediaquerys para cambiar el tamalo de mi logo dependiendo del
tamaño de la pantalla.*/
export default css`

    // xs
    @media only screen and (max-width: ${xs}) {
        & {
            grid-template-areas:"content content content content";
        }
        .sidebar {
            display:none;
        }

    }

    //sm
    @media only screen and (min-width: ${sm})   {
        &{
            grid-template-areas:"content content content content";
        }
        .sidebar {
            display:none;
        }
    }

    //md
    @media only screen and (min-width: ${md})   {
        
        &{
            grid-template-areas:"content content content content";
        }
        .sidebar {
            display:none;
        }
    }

    // >lg
    @media only screen and (min-width: ${lg}) {
        &{
            grid-template-areas:"sidebar content content content"
                                "sidebar content content content";
        }
        .sidebar {
            display:block;
        }
    }

   
`