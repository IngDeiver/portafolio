import React from "react"
import SEO from '../components/seo'
import Layout from "../components/layout"
import Avatar from '../components/avatar'


import styled from 'styled-components'
import colorTransition from '../styled/transitions/colorTransition'
const SobreMiContainer = styled.p`
  text-align: justify;
  color:${(props) => props.theme.colors.activeColor};
  transition:${colorTransition};
`;

const IndexPage = () => {
  return (
    <Layout >
      <SEO title="Sobre mí"/>
      <Avatar/>
      <div className="row">
        <div className="col-4"> </div>
        <div className="col-8"> 
          <SobreMiContainer >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim interdum congue. 
            Nam tristique odio nisi, sed malesuada arcu scelerisque vel. Nam ac justo vestibulum, 
            gravida urna id, porttitor est. Nullam non dictum nisi. Sed leo erat, laoreet ac egestas et,
            ornare ut eros. Aenean congue consectetur tortor nec finibus. Vestibulum a ligula eros. 
            Donec hendrerit leo at dolor feugiat vestibulum. In hac habitasse platea dictumst.
            Vestibulum volutpat libero ut nulla volutpat, ultricies mollis elit condimentum. 
            Nulla aliquam pulvinar lacus, id ullamcorper tortor mattis eleifend. Suspendisse potenti. 
            Sed non semper sem, sit amet faucibus sapien. Vivamus pellentesque sodales dolor, 
            vitae fermentum sem consectetur vel. Aliquam condimentum vehicula ligula non dictum. 
            Proin dapibus, erat ac feugiat blandit, purus libero facilisis orci, vel vehicula nisi est quis arcu.
          </SobreMiContainer>
        </div>
      </div>
    </Layout>
    )
}

export default IndexPage
