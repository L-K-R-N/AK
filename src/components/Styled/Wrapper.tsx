import styled from 'styled-components'


export const Wrapper = styled.div<WrapperProps>`
    width: ${({width}) => width || '80vw'};
    height: ${({height}) => height || '100%'};
    margin: ${({margin}) =>margin || '0 auto'};
`
interface WrapperProps {
    width?: string;
    height?: string;
    margin?: string;
}
