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
            <div className="d-flex flex-column  align-items-center mt-5">
                <LogoAndTextContainer>
                    <H1 className="title">404</H1>
                    <H2 className="title">Recurso no encontrado</H2>
                    <Pcontainer>
                        <p>
                            La ruta escrita no es valida, compruebala e itenta nuevamente.
                        </p>
                    </Pcontainer>
                </LogoAndTextContainer>
                <div className="d-flex justify-content-center mt-3 mb-5">
                    <Btn to="/">Volver al inicio</Btn>
                </div>
            </div>

        </>
    )
}
export default NotFoundPage
