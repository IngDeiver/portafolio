import React, {useContext}  from "react"
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import { useLocation } from "@reach/router"


//Styled buttons
import ThemeToggler from '../../styled/components/themeTogglerBtn'
import SocialIcons from '../../styled/components/socialIcons'
import Nav from '../../styled/components/navContainer'
import {Links, Linkitem} from '../../styled/components/navLinkElements'
import DownloadCvBtn from '../../styled/components/downloadCvBtn'
import { ThemeContext } from '../../context/themeContext';



// lista of sections for nav
const LinksList = [{to:"/", title:"Sobre mí"}, {to:"/habilidades", title:"Habilidades"},
                    {to:"/proyectos", title:"Proyectos"}, {to:"/contacto", title:"Contacto"}]

                  



const Header = () => {

  // accedo a las propiedades de contexto  tema
  const { isDarkTheme } = useContext(ThemeContext);
  const {pathname} = useLocation();
  const {blackLogo, whiteLogo} = useStaticQuery(graphql`
  query {
    whiteLogo: file(relativePath: { eq: "Logo white.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    
    blackLogo: file(relativePath: { eq: "Logo black.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)
  

  return (
    <Nav className="navbar">
      {/* Logo */}
        <Img style={{width:"70px"}} fluid={isDarkTheme ? whiteLogo.childImageSharp.fluid : blackLogo.childImageSharp.fluid} alt="Logo"></Img>

      {/* Links of nav */}
      <Links>
        {LinksList.map((link, i) => 
          <li key={i+1}>
            <Linkitem className={pathname === link.to ? "active":""} key={i}  to={link.to} >
              {link.title}
            </Linkitem>
          </li>)
        }
      </Links>


      {/* Buttons rigth */}
      <div className="d-flex flex-row justify-content-around">
          <ThemeToggler/>
          <SocialIcons lg={true}/>
          <DownloadCvBtn download href="/Hoja de vida.docx">Descargar CV</DownloadCvBtn>
      </div>

    </Nav>
)
}

export default Header

