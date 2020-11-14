import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        margin:0px;
        padding:0px;
    }

    html {
        scroll-behavior: smooth;
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

`;

export default GlobalStyle