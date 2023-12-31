import styled from 'styled-components'
import { FlexStyled } from '../Styled/FlexStyled'
import { ImgStyled } from '../Styled/ImgStyled'
import { Link } from 'react-router-dom'
import { MdOutlineAttractions } from 'react-icons/md'
interface Props {
 }

 const LogoStyled = styled(MdOutlineAttractions)<LogoStyledProps>`
    width: ${({width}) => width || '40px'};
    height: 100%;
    cursor: pointer;
    color: var(--second-text-color );
    transition: all 0.2s ease-out;

    &:hover {
        color: var(--text-color );
    }

    @media screen and (min-width: 768px) {
        width: ${({width}) => width || '60px'};
    }
 `

 interface LogoStyledProps {
    width?: string;
 }
 const LinkStyled = styled(Link)`
    display: flex;
    justify-content: start;
    width: 100%;
    height: 100%;
 `
export const Logo: React.FC<Props> = () => {

    return (
        <LinkStyled to={'/'}>
            <LogoStyled/>
        </LinkStyled>
        
    )
}

