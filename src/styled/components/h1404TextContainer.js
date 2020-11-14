import mediaquerys from '../mediaquerys/404Mediaquery'
import styled from 'styled-components'


// Es el h1 para las paginas 404 y contacto que se entra en pantallas pequeñas
export default styled.h1`
  text-align:start;
  ${mediaquerys};
`