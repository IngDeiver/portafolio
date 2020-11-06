import React from 'react'
import styled from 'styled-components'

import trasintionColor from '../../styled/transitions/colorTransition'

const Icon = styled.i`
  /*Donde se encuentra esta propiedad es por que se tiene acceso al tema por medio del themeProvider
    razon por la cual se puede acceder a los colores correspondientes para el tema.*/
  color:${(props) => props.theme.colors.activeColor};
  transition:${trasintionColor};
  font-size:${props => props.$lg ? "25px ": "20px"};
  margin-left:10px;
`
// Son los botones de Github y Linkedin de la nav y el footer
export default ({lg}) => (
  <div className="d-flex flex-row justify-content-between">
    <a  target="_blank" href="https://github.com/IngDeiver">
      <Icon $lg={lg}  className="fab fa-github"/>
    </a>
    <a target="_blank" href="https://www.linkedin.com/in/deiver-guerra-carrascal-0a3784176/">
      <Icon $lg={lg}  className="fab fa-linkedin"/>
    </a>
    
  </div>
)