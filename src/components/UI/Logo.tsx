import styled from 'styled-components'
import { FlexStyled } from '../Styled/FlexStyled'
import { ImgStyled } from '../Styled/ImgStyled'
import { Link } from 'react-router-dom'
interface Props {
 }

 const LogoStyled = styled(ImgStyled)`
    
 `

export const Logo: React.FC<Props> = () => {

    return (
        <Link to={'/'}>
            <FlexStyled justify={'space-beetwen'} height='100px'  >
                <ImgStyled src={require("../../img/svg/logo.svg").default} alt="" width='100%' height='50%' style={{cursor: 'pointer'}}/>  
            </FlexStyled>
        </Link>
            
        
    )
}