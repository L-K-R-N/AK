import styled from 'styled-components'


export const Wrapper = styled.div<WrapperProps>`
    width: ${({width}) => width || '85vw'};
    height: ${({height}) => height || '100%'};
    margin: ${({margin}) =>margin || '0 auto'};
    transition: all 0.3s ease-in-out;

    @media screen and (min-width: 767px) {
    }

    @media screen and (min-width: 1080px) {
    }
`
interface WrapperProps {
    width?: string;
    height?: string;
    margin?: string;

}
