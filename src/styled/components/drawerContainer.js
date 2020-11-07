import styled from 'styled-components'
import drawerTransition from '../transitions/colorTransition'

// Es el contenedor del drawer con fondo negro  y transparencia 
export default styled.div`
      width:100vw;
      height:0px;
      display: block;
      background-color:black;
      opacity: .8;
      position:absolute;
      top:65px;
      left:0px;
      transition:${drawerTransition};
    
`