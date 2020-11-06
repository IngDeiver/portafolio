import React from "react"
import SEO from './seo'
import Avatar from './avatar'
import SobreMiTextContainer from '../styled/components/sobremiContainer'
import Btn from '../styled/components/btn'
import Logo from './logo'



// Este es el componente donde hablo sobre mí
export default () => {


    return (
        <>
            <SEO title="Sobre mí" />
            <Avatar />
            <div className="d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row  mt-4 ">
                <Logo/>
                <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 mt-4 mt-sm-4">
                    <SobreMiTextContainer  >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim interdum congue.
                        Nam tristique odio nisi, sed malesuada arcu scelerisque vel. Nam ac justo vestibulum,
                        gravida urna id, porttitor est. Nullam non dictum nisi. Sed leo erat, laoreet ac egestas et,
                        ornare ut eros. Aenean congue consectetur tortor nec finibus. Vestibulum a ligula eros.
                        Donec hendrerit leo at dolor feugiat vestibulum. In hac habitasse platea dictumst.
                        Vestibulum volutpat libero ut nulla volutpat, ultricies mollis elit condimentum.
                    </SobreMiTextContainer>
                </div>
            </div>
            <div className="d-flex justify-content-center mt-3">
                <Btn to="/proyectos">Conoce mis proyectos</Btn>
            </div>
        </>
    )
}