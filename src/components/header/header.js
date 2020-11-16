import React, { useContext, useState } from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { useLocation } from "@reach/router"
import DrawerBtn from '../draweBtn'

//Styled 
import ThemeTogglerBtn from '../../styled/components/themeTogglerBtn'
import SocialIcons from '../socialIcons'
import Nav from '../../styled/components/navContainer'
import { Links, Linkitem } from '../../styled/components/navLinkElements'
import DownloadCvBtn from '../../styled/components/downloadCvBtn'
import { ThemeContext } from '../../context/themeContext';
import DrawerContainer from '../../styled/components/drawerContainer'

// lista of sections for nav
import LinksList from './linksList'





const Header = () => {

  // accedo a las propiedades de contexto  tema
  const { isDarkTheme } = useContext(ThemeContext);
  const { pathname } = useLocation();
  const { blackLogo, whiteLogo } = useStaticQuery(graphql`
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
  const [openDrawer, setOpenDrawer] = useState(false)

  const toogleDrawer = () => {
    setOpenDrawer(!openDrawer)
  }

  return (
    <Nav className="navbar">
      {/* Logo */}
      <Img style={{ width: "70px" }} fluid={isDarkTheme ? whiteLogo.childImageSharp.fluid : blackLogo.childImageSharp.fluid} alt="Logo"></Img>

      {/* Links of nav */}
      <Links className="show-md">
        {LinksList.map((link, i) =>
          <li key={i + 1}>
            <Linkitem className={pathname === link.to || pathname === "/portafolio" + link.to || (pathname.includes("proyectos") && link.to === "/proyectos") ? "active" : ""} key={i} to={link.to} >
              {link.title}
            </Linkitem>
          </li>)
        }
      </Links>


      {/* Buttons rigth */}
      <div className="d-flex flex-row justify-content-around mt-xl-3 mt-lg-3">
        <ThemeTogglerBtn />
        <SocialIcons className="show-md" lg={true} />
        <DownloadCvBtn className="show-md" download href="/Hoja de vida.docx">Descargar CV</DownloadCvBtn>
        <DrawerBtn toogleDrawer={toogleDrawer} openDrawer={openDrawer} />

      </div>

      {/* Drawer */}
      <DrawerContainer  className={openDrawer ? "drawer" : ""}>
        
        <div className="d-flex flex-column justify-content-center align-items-center mt-5">
          {LinksList.map((link, i) =>
            <Linkitem onClick={() => toogleDrawer()} className={pathname === link.to || pathname === "/portafolio" + link.to || (pathname.includes("proyectos") && link.to === "/proyectos") ? "active" : ""} key={i} to={link.to} >
              {link.title}
            </Linkitem>)
          }
        </div>

        <div className="row d-flex  justify-content-center my-3">
          <div className="d-flex flex-row justify-content-around">
            <SocialIcons lg={true} />
            <DownloadCvBtn download href="/Hoja de vida.docx">Descargar CV</DownloadCvBtn>
          </div>
        </div>
      </DrawerContainer>
    </Nav>
  )
}

export default Header

