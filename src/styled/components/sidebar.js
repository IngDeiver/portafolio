import styled from "styled-components";

/*El sidebar es la barra que prmite navegar por las diferentes categorias de las cuales 
tengo conocimiento quiero, estoy aprendiendo o aprendere en un futuro*/

const border = "2px"
export default styled.div`
    position:fixed;
    margin-top:8%;
    

    div  a.sidebar-item {
        cursor: pointer;
        text-decoration:none;
        color:${props => props.theme.colors.linkItemColor};
        padding:10px;
        
    }


    div a.active {
        background-color:${props => props.theme.colors.sidebarBgColor};
        border-left: solid ${border} ${props => props.theme.colors.sidebarLinkItemColor};
        border-right: solid ${border} ${props => props.theme.colors.sidebarLinkItemColor};
    }



    

`