import {createGlobalStyle} from 'styled-components'
import {activeLink} from "../styled/components/activeLink";

const GlobalStyle = createGlobalStyle`
    * {
        margin:0px;
        padding:0px;
    }
    .title {
        font-family: "Roboto Condensed";
        font-weight:700;
    }

    .subtitle {
        font-family: "Roboto Condensed";
        font-weight:400;
    }

    p, a {
        font-family: "Roboto Condensed";
        font-weight:300;
    }

    a.active {
        &::after{
            ${activeLink};
            width:100%;
        }
    }
`;

export default GlobalStyle