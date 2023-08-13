import { Wrapper } from "./Styled/Wrapper"
import { Logo } from "./UI/Logo"
import {RiAccountCircleLine} from 'react-icons/ri'
import { Link } from "react-router-dom"
import { styled } from "styled-components"
import { DivStyled } from "./Styled/DivStyled"
import SearchAndFilter from "./SearchAndFilter"


interface Props {
    onClick?: () => void
}

const HeaderContainer = styled.div`
    display: grid;
    grid-template-columns: 7fr 1fr;
    grid-template-rows: 100%;
    padding: 5vh 0;
    height: 100%;
    align-items: center;
    gap: 1vw;

    @media screen and (min-width: 700px){
        grid-template-columns: 7fr 1fr;
    }
    @media screen and (min-width: 1100px){
        grid-template-columns: 12fr 1fr;
    }
`
const HeaderContent = styled.header`
    width: 100vw;
    height: 17vh;
    background: var(--bg-color);
    box-shadow: var(--shadow);
`

export const Header: React.FC<Props> = ({...props}) => {


    return (
        <HeaderContent >
            <Wrapper>
                <HeaderContainer > 
                    
                    <Link to={'profile'} style={{width: '100%', height: '100%', color: 'var(--yellow-color)'}}>
                        <RiAccountCircleLine style={{width: '100%', height: '100%'}}/>
                    </Link>
                            
                        {/* <div style={{background: '#949494'}}></div> */}
                         {/* <ImgStyled src={require('../../img/svg/settings.svg').default} height="70%" cursor="pointer" /> */}
                    
                </HeaderContainer>
            </Wrapper>
        </HeaderContent>
    )
}