import React, { useContext } from "react"
import SEO from './seo'
import Avatar from './avatar'
import SobreMiContainer from '../styled/components/sobremiContainer'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import {ThemeContext} from '../context/themeContext'
import Btn from '../styled/components/btn'


// Este es el componente donde hablo sobre mí
export default () => {
    const {logoWhite, logoBlack} = useStaticQuery(graphql`
    query {
      logoWhite:file(relativePath: { eq: "Logo white.png" }) {
        childImageSharp {
            fluid {
            ...GatsbyImageSharpFluid
            }
        }
      }
  
      logoBlack:file(relativePath: { eq: "Logo black.png" }) {
        childImageSharp {
            fluid {
            ...GatsbyImageSharpFluid
            }
        }
      }
        
    }
    `)
  
    const {isDarkTheme} = useContext(ThemeContext)
    
    return (
        <>
            <SEO title="Sobre mí" />
            <Avatar />

            <div className="row mt-4 ">
                <div className="col-4 d-flex  flex-row-reverse">
                    <Img style={{width:"200px"}} fluid={!isDarkTheme ? logoBlack.childImageSharp.fluid : logoWhite.childImageSharp.fluid}></Img>
                </div>
                <div className="col-7">
                    <SobreMiContainer  >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim interdum congue.
                        Nam tristique odio nisi, sed malesuada arcu scelerisque vel. Nam ac justo vestibulum,
                        gravida urna id, porttitor est. Nullam non dictum nisi. Sed leo erat, laoreet ac egestas et,
                        ornare ut eros. Aenean congue consectetur tortor nec finibus. Vestibulum a ligula eros.
                        Donec hendrerit leo at dolor feugiat vestibulum. In hac habitasse platea dictumst.
                        Vestibulum volutpat libero ut nulla volutpat, ultricies mollis elit condimentum.
            </SobreMiContainer>
                </div>
            </div>

            <div className="d-flex justify-content-center mt-3">
                <Btn to="/proyectos">Conoce mis proyectos</Btn>
            </div>
        </>
    )
}