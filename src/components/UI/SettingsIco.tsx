import {FiSettings} from 'react-icons/fi'
import styled from 'styled-components'
import { FlexStyled } from '../Styled/FlexStyled'
import { ImgStyled } from '../Styled/ImgStyled'
import { Link } from 'react-router-dom'
import { MdOutlineAttractions } from 'react-icons/md'
interface Props {
 }

 const SettingsIcoStyled = styled(FiSettings)<SettingsIcoStyledProps>`
    width: ${({width}) => width || '30px'};
    height: 100%;
    cursor: pointer;
    color: var(--second-text-color );
    stroke-width: 1.7;
    transition: all 0.2s ease-out;

    &:hover {
        color: var(--text-color );
    }

    @media screen and (min-width: 768px) {
        width: ${({width}) => width || '45px'};
    }
 `

 interface SettingsIcoStyledProps {
    width?: string;
 }
 const LinkStyled = styled(Link)`
    display: flex;
    justify-content: start;
    /* width: 100%; */
    height: 100%;
 `
export const SettingsIco: React.FC<Props> = () => {

    return (
        <LinkStyled to={'/settings'}>
            <SettingsIcoStyled/>
        </LinkStyled>
        
    )
}

