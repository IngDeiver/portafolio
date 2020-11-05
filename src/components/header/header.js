import React  from "react"
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

//Styled buttons
import ThemeToggler from '../../styled/components/themeTogglerBtn'
import {GithubIcon, LinkedinIcon} from '../../styled/components/socialIcons'
import Nav from '../../styled/components/navContainer'
import {Links, Linkitem} from '../../styled/components/navLinkElements'
import DownloadCvBtn from '../../styled/components/downloadCvBtn'




// lista of sections for nav
const LinksList = [{to:"/", title:"Sobre mí"}, {to:"/habilidades", title:"Habilidades"},
                    {to:"/proyectos", title:"Proyectos"}, {to:"/contacto", title:"Contacto"}]

                  



const Header = () => {

  const {blackLogo} = useStaticQuery(graphql`
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
      <a className="navbar-brand" href="/">
        <Img fluid={blackLogo.childImageSharp.fluid} alt="Logo"/> 
      </a>

      {/* Liks of nav */}
      <Links>
        {LinksList.map((link, i) => 
          <li key={i+1}>
            <Linkitem key={i}  to={link.to} >
              {link.title}
            </Linkitem>
          </li>)
        }
      </Links>


      {/* Buttons rigth */}
      <div className="d-flex flex-row justify-content-around">
          <ThemeToggler/>
          <LinkedinIcon/> 
          <GithubIcon/>
          <DownloadCvBtn download href="/Hoja de vida.docx">Descargar CV</DownloadCvBtn>
      </div>

    </Nav>
)
}

export default Header

