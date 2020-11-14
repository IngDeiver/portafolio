import React from "react"
import SEO from '../components/seo'
import LogoAndTextContainer from '../components/logoAndTextContainer'
import Pcontainer from '../styled/components/pContactContainer'
import H1 from '../styled/components/h1404TextContainer'
import H2 from '../styled/components/h2404TextContainer'
import Btn from '../styled/components/btn'

// Este es el componente donde hablo sobre mí
const NotFoundPage = () => {


    return (
        <>
            <SEO title="404 Not found" />
            <div style={{marginTop:"30vh"}} className="d-flex flex-column justify-content-center align-items-center">
                <LogoAndTextContainer>
                    <H1 className="title">404</H1>
                    <H2 className="title">Recurso no encontrado</H2>
                    <Pcontainer>
                        La ruta escrita no es valida, compruebala e itenta nuevamente.
                        </Pcontainer>
                </LogoAndTextContainer>
                <div className="d-flex justify-content-center mt-3">
                    <Btn to="/">Volver al inicio</Btn>
                </div>
            </div>

        </>
    )
}
export default NotFoundPage
