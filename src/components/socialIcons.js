import React from 'react'
import Icon from '../styled/components/icon'


// Son los botones de Github y Linkedin de la nav y el footer
export default ({lg}) => (
  <div className="d-flex flex-row justify-content-between">
    <a  target="_blank" href="https://github.com/IngDeiver" rel="noreferrer">
      <Icon $lg={lg}  className="fab fa-github"/>
    </a>
    <a target="_blank" href="https://www.linkedin.com/in/deiver-guerra-carrascal-0a3784176/" rel="noreferrer">
      <Icon $lg={lg}  className="fab fa-linkedin"/>
    </a>
    
  </div>
)