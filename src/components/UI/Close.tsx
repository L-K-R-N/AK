import { styled } from "styled-components";
import React from 'react'
import {CgClose} from 'react-icons/cg'


const CloseStyled = styled(CgClose)<CloseStyledProps>`
    width: ${({width}) => width || '33px'};
    height: ${({width}) => width || '33px'};
    cursor: pointer;
    color: var(--second-text-color );
    transition: all 0.2s ease-out;

    &:hover {
        color: var(--text-color );
    }
`

interface CloseStyledProps {
    width?: string;
}

interface Props {
    close: () => void;
}

export const Close: React.FC<Props> = ({close}) => {
    return(
        <CloseStyled onClick={() => close()}>
        </CloseStyled>
    )
}

export default Close