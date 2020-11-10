import React, {useContext} from "react";
import { useStaticQuery, graphql } from 'gatsby'
import { ThemeContext } from '../context/themeContext'
import Logo from '../styled/components/logo'

export default () => {
    
const { logoWhite, logoBlack } = useStaticQuery(graphql`
query {
  logoWhite:file(relativePath: { eq: "Logo white.png" }) {
    childImageSharp {
        fixed {
        ...GatsbyImageSharpFixed
        }
    }
  }

  logoBlack:file(relativePath: { eq: "Logo black.png" }) {
    childImageSharp {
        fixed {
        ...GatsbyImageSharpFixed
        }
    }
  }
    
}
`)

const { isDarkTheme } = useContext(ThemeContext)

    return (
        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 
                        d-flex  justify-content-center mt-md-auto mb-md-auto justify-content-sm-center justify-content-md-center justify-content-lg-end justify-content-xl-end ">
            <Logo className="img-fluid" src={!isDarkTheme ? logoBlack.childImageSharp.fixed.src : logoWhite.childImageSharp.fixed.src}/>
        </div>
    )
}