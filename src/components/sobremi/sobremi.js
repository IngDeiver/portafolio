import React from "react"
import SEO from '../seo'
import Avatar from '../avatar'
import Btn from '../../styled/components/btn'
import Fade from 'react-reveal/Fade';
import LogoAndTextContainer from '../logoAndTextContainer'
import TextContainer from '../../styled/components/pContainer'
import sobremiDescriptiontText from './sobremiDescriptiontText'


// Este es el componente donde hablo sobre mí
export default () => {


    return (
        <>
            <SEO title="Sobre mí" />
            <Avatar />
            <LogoAndTextContainer>
                <TextContainer>
                   {sobremiDescriptiontText.description}
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