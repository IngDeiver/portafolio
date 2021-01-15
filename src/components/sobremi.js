import React from "react"
import SEO from './seo'
import Avatar from './avatar'
import Btn from '../styled/components/btn'
import Fade from 'react-reveal/Fade';
import LogoAndTextContainer from './logoAndTextContainer'
import TextContainer from '../styled/components/pContainer'
import { graphql, useStaticQuery } from 'gatsby'

// Este es el componente donde hablo sobre mí
export default () => {

    const data = useStaticQuery(graphql`
    query MyQuery {
        strapiSobremis(id: {eq: "Sobremis_6001e9fdd06b8f54e53d0be6"}) {
          descripcion
        }
      }
    `)

    return (
        <>
            <SEO title="Sobre mí" />
            <Avatar />
            <LogoAndTextContainer>
                <TextContainer>
                  <p style={{textAlign:"justify"}}>
                    {data.strapiSobremis?.descripcion}
                  </p>
                </TextContainer>
            </LogoAndTextContainer>
            <Fade bottom>
                <div className="d-flex justify-content-center mt-3">
                    <Btn to="/proyectos">Conoce mis proyectos</Btn>
                </div>
            </Fade>
        </>
    )
}