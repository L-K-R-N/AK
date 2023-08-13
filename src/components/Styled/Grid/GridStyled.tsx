import styled from 'styled-components'

export const GridStyled = styled.div<GridProps>`
    display: grid;
    grid-template-columns: ${({templateColumns}) => templateColumns};
    grid-template-rows: ${({templateRows}) => templateRows};
    align-items: ${({align}) => align};
    gap: ${({gap}) => gap || '0'};
    width: ${({width}) => width || '100%'};
    height: ${({height}) => height || '100%'};
    border: ${({border}) => border};
    margin: ${({margin}) => margin};
    border-radius: ${({borderRadius}) => borderRadius};
    background: ${({background}) => background};
    overflow: hidden;
    
`

interface GridProps { 
    width?: string;
    height?: string;
    templateColumns?: string;
    templateRows?: string;
    align?: string;
    margin?: string;
    gap?: string;
    border?: string;
    borderRadius?: string;
    background?: string;
}

