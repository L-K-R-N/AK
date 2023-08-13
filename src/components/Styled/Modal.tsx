import { styled } from "styled-components";

export const ModalContainer = styled.div<Props>`

    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: var(--bg-color);
    z-index: 1000;
    display: ${({hidingState}) => hidingState ? 'block' : 'none'};
`

interface Props {
    hidingState: boolean;
}
