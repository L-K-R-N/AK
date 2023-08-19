import styled, { keyframes } from 'styled-components'
import { FlexStyled } from '../Styled/FlexStyled'
import { ImgStyled } from '../Styled/ImgStyled'
import { Link } from 'react-router-dom'
import { MdOutlineAttractions } from 'react-icons/md'

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    } to {
        transform: rotate(360deg);
    }
`

const LoaderStyled = styled.div<LoaderStyledProps>`
    width: ${({width}) => width || '10vmax'};
    height: ${({width}) => width || '10vmax'};
    border-radius: 50%;
    border: 10px solid var(--second-text-color);
    border-top: none;
    border-right: none;
    animation: ${rotate} 1s ease-in-out infinite;
 `

 interface LoaderStyledProps {
    width?: string;
 }

export const Loader: React.FC = () => {

    return (
       <LoaderStyled/>
    )
}
