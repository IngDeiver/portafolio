import styled from 'styled-components'


// Es el contenedor principal de toda la App, lo uso para aplicar el temay demas estilos
export default styled.div`
     background-color:${(props) => props.theme.colors.bodyBgColor};
     min-height:100vh;
`;