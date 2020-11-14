import React from 'react'
import { Github, Linkedin } from '@styled-icons/fa-brands';
import styled  from 'styled-components'
import IconStyle from '../styled/components/icon'

const GithubIcon = styled(Github)`
  ${IconStyle};
`

const LinkedinIcon = styled(Linkedin)`
  ${IconStyle};
`


// Son los botones de Github y Linkedin de la nav y el footer
export default ({lg, className}) => (
  <div className="d-flex flex-row flex-xl-row justify-content-sm-between justify-content-md-between justify-content-lg-between 
  justify-content-xl-between  justify-content-center mb-3 ml-3">
    <a  className={className} target="_blank" href="https://github.com/IngDeiver" rel="noreferrer">
      <GithubIcon $lg={lg}/>
    </a>
    <a className={className} target="_blank" href="https://www.linkedin.com/in/ingenDeiver/" rel="noreferrer">
      <LinkedinIcon width="25px"/>
    </a>
    
  </div>
)