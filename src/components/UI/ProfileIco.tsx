import {VscAccount} from 'react-icons/vsc'
import styled from 'styled-components'
import { FlexStyled } from '../Styled/FlexStyled'
import { ImgStyled } from '../Styled/ImgStyled'
import { Link } from 'react-router-dom'
import { MdOutlineAttractions } from 'react-icons/md'
interface Props {
 }

 const ProfileIcoStyled = styled(VscAccount)<ProfileIcoStyledProps>`
    width: ${({width}) => width || '30px'};
    height: 100%;
    cursor: pointer;
    color: var(--second-text-color );
    stroke-width: 0.1;
    transition: all 0.2s ease-out;

    &:hover {
        color: var(--text-color );
    }

    @media screen and (min-width: 768px) {
        width: ${({width}) => width || '40px'};
    }
 `

 interface ProfileIcoStyledProps {
    width?: string;
 }
 const LinkStyled = styled(Link)`
    display: flex;
    justify-content: start;
    /* width: 100%; */
    height: 100%;
    font-weight: 100;
 `
export const ProfileIco: React.FC<Props> = () => {

    return (
        <LinkStyled to={'/profile'}>
            <ProfileIcoStyled/>
        </LinkStyled>
        
    )
}

