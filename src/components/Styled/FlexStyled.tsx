import styled from 'styled-components'
import { DivStyled } from './DivStyled';

export const FlexStyled = styled.div<FlexProps>`
    display: flex;
    align-items: ${({align}) => align || 'center'};
    justify-content: ${props => props.justify || 'center'};
    flex-direction: ${({direction}) => direction || 'row'};
    gap: ${({gap}) => gap };
    background: ${({background}) => background };
    width: ${({width}) => width || '100%'};
    height: ${({height}) => height || '100%'};
    border-radius: ${({borderRadius}) => borderRadius};

`

interface FlexProps {
    align?: string;
    justify?: string;
    direction?: string;
    gap?: string;
    background?: string;
    width?: string;
    height?: string;
    borderRadius?: string;
}

