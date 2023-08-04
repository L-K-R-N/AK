import styled, {css, keyframes} from 'styled-components'
import { colors } from '../../styles/colors';



export const ButtonStyled = styled.button<ButtonProps>`
    cursor: pointer;
    transition: 0.1s all ease-out;

    width: ${({width}) => width || '60%'};
    height: ${({height}) => height || '40%'};
    padding: ${({padding}) => padding || '1%'};
    border: ${({border}) => border || `1px solid black`};
    border-radius: ${({borderRadius}) => borderRadius || '16px'};

    color: ${({color}) => color || 'black'};

    font-size: ${({fontSize}) => fontSize || '1.4em'};

    

    ${props => props.primary && css`
        background: ${props.background || props.theme.colors.white};
        color: ${props.color || colors.dark_gray};
        border: none;
    `}
    ${props => props.outlined && css`
        background:  'transparent';
        color: ${props.color || 'black'};
        border: 1px solid ${props.color || 'black'};
    `}
 

    &:hover {
        
    }
`
interface ButtonProps {
    width?: string;
    height?: string;
    padding?: string;
    border?: string;
    borderRadius?: string ;
    background?: string ;
    color?: string;
    fontSize?: string;

    primary?: boolean;
    outlined?: boolean;

}


