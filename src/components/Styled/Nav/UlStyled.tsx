import styled from 'styled-components'
import { FlexStyled } from '../FlexStyled';


export const UlStyled = styled.ul<UlProps>`
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    width: 100%;
    height: 100%;
`
interface UlProps {

}

