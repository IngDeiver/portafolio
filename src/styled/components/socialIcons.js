import {Github, Linkedin} from '@styled-icons/fa-brands'
import styled from 'styled-components'


// Styled icons
export const GithubIcon = styled(Github)`
  color:${props => props.theme.colors.iconColor};
  font-size:20px;
`;

export const LinkedinIcon = styled(Linkedin)`
  color:${props => props.theme.colors.iconColor};
  font-size:20px;
`;