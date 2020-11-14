import {css} from 'styled-components'
import {xs, sm, md , lg} from './widths'
import {paddingimg} from '../components/containerImageProject'
import {radius} from '../components/imageProject'


/*Son los mediaquerys para cambiar el tamalo de mi logo dependiendo del
tamaño de la pantalla.*/
export default css`

    // xs
    @media only screen and (max-width: ${xs}) {
        width:calc(100% - 2*${paddingimg});
        bottom:${paddingimg};
        border-bottom-left-radius:${radius};
        border-bottom-right-radius:${radius};
    }

    //sm
    @media only screen and (min-width: ${sm})   {
        width:calc(100% - 2*${paddingimg});
        bottom:${paddingimg};
        border-bottom-left-radius:${radius};
        border-bottom-right-radius:${radius};
    }

    //md
    @media only screen and (min-width: ${md})   {
        width:calc(100% - 2*${paddingimg});
        bottom:${paddingimg};
        border-bottom-left-radius:${radius};
        border-bottom-right-radius:${radius};
    }

    // >lg
    @media only screen and (min-width: ${lg}) {
        width: 0px;
        bottom:45%;
        border-bottom-left-radius:0px;
        border-bottom-right-radius:0px;
    }

   
`