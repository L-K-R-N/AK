import styled from 'styled-components'
import { DivStyled } from './DivStyled';

export const FlexStyled = styled(DivStyled)<FlexProps>`
    display: flex;
    align-items: ${({align}) => align || 'center'};
    justify-content: ${props => props.justify || 'center'};
    flex-direction: ${({direction}) => direction || 'row'};
`

interface FlexProps {
    align?: string;
    justify?: string;
    direction?: string;
}

