import React from "react"
import SocialIcons from './socialIcons'
import {FooterContainer, FooterSignature} from '../styled/components/footer'





const Footer = () => (
  <FooterContainer >
        <div className="d-flex flex-row justify-content-around mx-5">
          <FooterSignature className="text-center" >Deiver Guerra Carrascal &copy; 2020</FooterSignature>
          <SocialIcons/>
        </div>
  </FooterContainer>
)

export default Footer