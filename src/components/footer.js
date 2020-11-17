import React from "react"
import SocialIcons from './socialIcons'
import {FooterContainer, FooterSignature} from '../styled/components/footer'





const Footer = () => (
  <FooterContainer >
        <div className="d-flex flex-column  flex-sm-row flex-md-row flex-lg-row flex-xl-row  
                        justify-content-sm-around justify-content-md-around justify-content-lg-around
                        justify-content-xl-around  justify-content-around
                        mx-5">
          <FooterSignature className="text-center" >
            Deiver Guerra Carrascal &copy; {`${new Date().getFullYear()}`}
          </FooterSignature>
          <SocialIcons/>
        </div>
  </FooterContainer>
)

export default Footer