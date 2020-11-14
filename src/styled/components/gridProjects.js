import styled from 'styled-components'

export default styled.div`
    display:grid;
    grid-gap:20px;
    
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows:repeat(2, auto);
    grid-template-areas:"sidebar content content content"
                        "sidebar content content content";

    .sidebar {
        grid-area: sidebar;
    }

    .content {
        grid-area: content;
    }
`