import {css} from 'styled-components'
import {xs, sm, md , lg} from './widths'


/*Son los mediaquerys para cambiar la decripción de las skills dependiendo del
tamaño de la pantalla.*/
const margin = "10px"
export default css`

    // xs
    @media only screen and (max-width: ${xs}) {
        position: initial;
        height:100%;
        background-color:${props => props.theme.colors.containerImageColor};

        p {
            color:${props => props.theme.colors.skillDescriptionColor};;
        }

        &::before {
            content:"";
            display:block;
            height:2px;
            width:100%;
            background-color:#F1EFEF;
            margin-bottom:${margin};
        }
    }

    //sm
    @media only screen and (min-width: ${sm})   {
        position: initial;
        height:100%;
        background-color:${props => props.theme.colors.containerImageColor};
        p {
            color:${props => props.theme.colors.skillDescriptionColor};;
        }
        &::before {
            content:"";
            display:block;
            height:2px;
            width:100%;
            background-color:#F1EFEF;
            margin-bottom:${margin};
        }
    }

    //md
    @media only screen and (min-width: ${md})   {
        position: initial;
        height:100%;
        background-color:${props => props.theme.colors.containerImageColor};
        p {
            color:${props => props.theme.colors.skillDescriptionColor};;
        }

        &::before {
            content:"";
            display:block;
            height:2px;
            width:100%;
            background-color:#F1EFEF;
            margin-bottom:${margin};
        }
    }

    // >lg
    @media only screen and (min-width: ${lg}) {
        position: absolute;
        height:0px;
        background-color:rgba(0,0,0,0.8);
        p {
            color:white;
        }
        &::before {
            content:"";
            display:initial;
            height:0px;
            width:0px;
        }
    }

   
`