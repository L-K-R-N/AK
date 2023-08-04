import styled from 'styled-components'
import { DivStyled } from './DivStyled';

export const GridStyled = styled.div<GridProps>`
    display: grid;
    grid-template-columns: ${({templateColumns}) => templateColumns || 'repeat(1fr)'};
    grid-template-rows: ${({templateRows}) => templateRows || '100%'};
    align-items: ${({align}) => align || 'center'};
    gap: ${({gap}) => gap || 'd0'};
    width: ${({width}) => width || '100%'};
    height: ${({height}) => height || '100%'};
`

interface GridProps { 
    width?: string;
    height?: string;
    templateColumns?: string;
    templateRows?: string;
    align?: string;
    margin?: string;
    gap?: string;
}

