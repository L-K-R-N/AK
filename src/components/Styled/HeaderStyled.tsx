import styled from 'styled-components'
import { colors, secondColor } from '../../styles/colors';
import '../../styles/index.css';

export const HeaderStyled = styled.header<HeaderProps>`
    width: ${({width}) => width || '100vw'};
    height: ${({height}) => height || '10vh'};
    background: ${props => props.background || props.theme.colors.bg_color};
`

interface HeaderProps {
    width?: string;
    height?: string;
    background?: string;

}

