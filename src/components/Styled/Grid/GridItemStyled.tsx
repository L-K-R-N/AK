import styled from 'styled-components'

export const GridItemStyled = styled.div<GridItemProps>`
    grid-area: ${({gridArea}) => gridArea};
    border: ${({border}) => border};
    background: ${({background}) => background};
    z-index: ${({zIndex }) => zIndex || 10};
    &:hover {
        z-index: 100;
        grid-area: ${props => props.hover || props.gridArea}
    }
`

interface GridItemProps { 
    gridArea?: string;
    border?: string;
    hover?: string;
    background?: string;
    zIndex?: number;
}
