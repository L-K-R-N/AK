import styled from 'styled-components'
import { FlexStyled } from '../Styled/FlexStyled'
import { ImgStyled } from '../Styled/ImgStyled'
import { Link } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
interface Props {
    click: () => void;
 }

 const BurgerStyled = styled(FiMenu)<BurgerStyledProps>`
    width: ${({width}) => width || '40px'};
    height: 100%;
    cursor: pointer;
    color: var(--second-text-color);
    transition: all 0.2s ease-out;
    &:hover {
        color: var(--text-color);
    }

    @media screen and (min-width: 768px) {
        width: ${({width}) => width || '60px'};
    }
 `

 interface BurgerStyledProps {
    width?: string;
 }
 const LinkStyled = styled(Link)`
    display: flex;
    justify-content: end;
    width: 50%;
    height: 100%;
 `
export const Burger: React.FC<Props> = ({click}) => {

    return (
        <BurgerStyled onClick={() => click()}/>
    )
}