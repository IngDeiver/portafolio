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
        strapiSobremis(id: {eq: "Sobremis_1"}) {
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
                   {data.strapiSobremis?.descripcion}
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