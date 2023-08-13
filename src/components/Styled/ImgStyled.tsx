import styled from 'styled-components'


export const ImgStyled = styled.img<ImgProps>`
    width: ${({width}) => width || '100%'};
    height: ${({height}) => height || '100%'};
    background: ${({bakcground}) => bakcground || 'transparent'};
    object-fit: ${({objectFit}) => objectFit || 'cover'};
    cursor: ${({cursor}) => cursor || 'auto'};
    
`
interface ImgProps {
    width?: string;
    height?: string;
    bakcground?: string;
    cursor?: string;
    objectFit?: string;
}

