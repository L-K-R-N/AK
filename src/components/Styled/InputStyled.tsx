import styled from 'styled-components'
import { mainColor, textColor } from '../../styles/colors';


export const InputStyled = styled.input<InputProps>`
    font-family: 'Exo 2';
    font-weight: 100;
    width: ${({width}) => width || '100%'};
    height: ${({height}) => height || '100%'};
    padding: ${({padding}) => padding || '1% 10%'};
    border: ${({border}) => border || '1px solid black'};
    border-radius: ${({borderRadius}) => borderRadius || '20px'};
    flex-grow: ${({flexGrow}) => flexGrow };
    background: ${({background}) => background || mainColor};
    text-align: ${({textAlign}) => textAlign || 'left'};
    color: ${({color}) => color || textColor};
    font-size: ${({fontSize}) => fontSize || '14px'};
    text-transform: initial;



`
interface InputProps {
    width?: string;
    height?: string;
    padding?: string;
    border?: string;
    borderRadius?: string;
    flexGrow?: number;
    background?: string;
    textAlign?: string;
    color?: string;
    fontSize?: string;
    textTransform?: string;
}
