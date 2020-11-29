import React from "react"
import SEO from './seo'
import Avatar from './avatar'
import LogoAndTextContainer from './logoAndTextContainer'
import TextContainer from '../styled/components/pContainer'
import { graphql, useStaticQuery } from 'gatsby'
import Pcontainer from '../styled/components/pContactContainer'
import H1 from '../styled/components/h1404TextContainer'
import Btn from '../styled/components/btn'
import { Whatsapp} from '@styled-icons/fa-brands';
import IconStyle from '../styled/components/icon'
import styled from 'styled-components'

const WhatsappIcon = styled(Whatsapp)`
  ${IconStyle};
  color:white;
  width:20px;
`

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
                            <strong>Email: </strong> {data.strapiContactos?.email}
                        </Pcontainer>
                        <div className="d-flex justify-content-center justify-content-lg-start mt-3 ">
                            <Btn className="ml-lg-2"  target="_blank" 
                                        href={`https://wa.me/${data.strapiContactos?.telefono}`}  
                                        rel="noreferrer">
                                <WhatsappIcon/> Escribeme
                            </Btn>
                        </div>
                    </TextContainer>
                </LogoAndTextContainer>
            </div>
        </>
    )
}