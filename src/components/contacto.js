import React from "react"
import SEO from './seo'
import Avatar from './avatar'
import LogoAndTextContainer from './logoAndTextContainer'
import TextContainer from '../styled/components/pContainer'
import { graphql, useStaticQuery } from 'gatsby'
import Pcontainer from '../styled/components/pContactContainer'
import H1 from '../styled/components/h1404TextContainer'
// Este es el componente donde hablo sobre mí
export default () => {

    const data = useStaticQuery(graphql`
    query {
        strapiContactos(id: {eq: "Contactos_1"}) {
          telefono
          email
          pais
          ciudad
        }
      }
    `)

    return (
        <>
            <SEO title="Contacto" />
            <Avatar />
            <div className="d-flex justify-content-center">
                <LogoAndTextContainer>
                    <TextContainer>
                        <H1 className="title">Comunícate conmingo</H1>
                        <Pcontainer>{`${data.strapiContactos?.ciudad}, ${data.strapiContactos?.pais}`}</Pcontainer>
                        <Pcontainer>
                            <strong>Tel: </strong> {data.strapiContactos?.telefono}
                        </Pcontainer>
                        <Pcontainer>
                            <strong>Email: </strong> {data.strapiContactos?.email}
                        </Pcontainer>
                    </TextContainer>
                </LogoAndTextContainer>
            </div>
        </>
    )
}