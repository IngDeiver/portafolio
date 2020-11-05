import React from "react"
import SocialIcons from '../../styled/components/socialIcons'
import {FooterContainer, FooterSignature} from '../../styled/components/footer'





const Footer = () => (
  <FooterContainer >
        <div className="d-flex flex-row justify-content-around">
          <FooterSignature >Deiver Guerra Carrascal &copy; 2020</FooterSignature>
          <SocialIcons/>
        </div>
  </FooterContainer>
)

export default Footer