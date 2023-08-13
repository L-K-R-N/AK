import styled from 'styled-components'
import { FlexStyled } from '../Styled/FlexStyled'
import { ImgStyled } from '../Styled/ImgStyled'
import { Link } from 'react-router-dom'
interface Props {
 }

 const LogoStyled = styled(ImgStyled)`
    width: auto;
    height: auto;
    cursor: pointer;
 `
 const LinkStyled = styled(Link)`
    width: 100%;
    height: 100%;
 `

export const Logo: React.FC<Props> = () => {

    return (
            <LinkStyled to={'/'}>
                <LogoStyled src={require("../../assets/svg/logo.svg").default} alt="" />  
            </LinkStyled>

    )
}