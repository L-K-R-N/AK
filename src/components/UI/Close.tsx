import { styled } from "styled-components";
import React from 'react'

const CloseContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    cursor: pointer;
`
const CloseItem = styled.span<CloseItemProps>`
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    background: white;
    transform: ${({transform}) => transform};
`

interface CloseItemProps {
    transform: string;
}

interface Props {
    close: () => void;
}

export const Close: React.FC<Props> = ({close}) => {
    return(
        <CloseContainer onClick={() => close()}>
           <CloseItem transform="rotate(45deg)"/>
           <CloseItem transform="rotate(-45deg)"/>
        </CloseContainer>
    )
}

export default Close