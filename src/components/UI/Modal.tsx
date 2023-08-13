import React from 'react'
import { styled } from 'styled-components'

const ModalContainer = styled.div<Props>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #474747;
    z-index: 10000;
`

interface Props {
    // hidingState: boolean;
}

export const Modal: React.FC<Props> = () => {
    return(
        <ModalContainer >
            
        </ModalContainer>
    )
}

export default Modal