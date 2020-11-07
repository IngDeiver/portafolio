import styled from 'styled-components'
import drawerTransition from '../transitions/colorTransition'

// Es el contenedor del drawer con fondo negro  y transparencia 
export default styled.div`
      width:100%;
      height:0px;
      display: block;
      background-color:${(props) => props.theme.colors.backgroundDrawer};
      position:absolute;
      top:65px;
      left:0px;
      overflow:hidden;
      transition:${drawerTransition};
    
`