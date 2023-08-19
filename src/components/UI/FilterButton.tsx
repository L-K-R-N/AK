import {VscAccount} from 'react-icons/vsc'
import styled from 'styled-components'
import { FlexStyled } from '../Styled/FlexStyled'
import { ImgStyled } from '../Styled/ImgStyled'
import { Link } from 'react-router-dom'
import { LuSettings2 } from 'react-icons/lu'
interface Props {
 }

 const FilterIcoStyled = styled(LuSettings2)<FilterIcoStyledProps>`
    width: ${({width}) => width || '30px'};
    height: 100%;
    cursor: pointer;
    color: var(--second-text-color );
    stroke-width: 1.7;
    transition: all 0.1s ease-out;
    
    &:hover {
        color: var(--text-color );
    }
    


    @media screen and (min-width: 768px) {
        width: ${({width}) => width || '35px'};
    }
 `

 interface FilterIcoStyledProps {
    width?: string;
 }
 const LinkStyled = styled(Link)`
    /* padding: 10%; */
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--second-bg-color);
    border-radius: 50%;
    /* width: 100%; */
    height: 100%;
    font-weight: 100;
    outline: 1px solid var(--second-bg-color);
    transition: all 0.1s ease-out;
    &:focus {
        outline: 2px solid var(--second-text-color);
    }
    &:hover {
        outline: 2px solid var(--second-text-color);
        
    }
 `
export const FilterIco: React.FC<Props> = () => {

    return (
        <LinkStyled to={'/filters'}>
            <FilterIcoStyled/>
        </LinkStyled>
        
    )
}
