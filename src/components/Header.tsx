import { Wrapper } from "./Styled/Wrapper"
import { Logo } from "./UI/Logo"
import {RiAccountCircleLine} from 'react-icons/ri'
import { Link } from "react-router-dom"
import { styled } from "styled-components"
import { DivStyled } from "./Styled/DivStyled"
import SearchAndFilter from "./SearchAndFilter"
import { Burger } from "./UI/Burger"
import { ThemeSwitcher } from "./UI/ThemeSwitcher"
import { FlexStyled } from "./Styled/FlexStyled"
import { Menu } from "./Menu"
import { SideMenu } from "./SideMenu"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { setMenuActive } from "../store/reducers/FilterSlice"


interface Props {
    onClick?: () => void
}

const HeaderContainer = styled.div`
    display: grid;
    grid-template-columns: 6fr 1fr;
    grid-template-rows: 100%;
    padding: 5vh 0;
    height: 100%;
    align-items: center;
    gap: 1vw;

    @media screen and (min-width: 700px){
        grid-template-columns: 6fr 1fr;
    }
    @media screen and (min-width: 1100px){
        grid-template-columns: 6fr 1fr;
    }
`
const HeaderContent = styled.header`
    width: 100%;
    height: 17vh;
    background: var(--bg-color);
`

export const Header: React.FC<Props> = ({...props}) => {
    const dispatch = useAppDispatch()
   
   
    return (
        <HeaderContent >
            <Wrapper>
                <HeaderContainer > 
                    <Logo/>
                    
                    <FlexStyled gap="3%" justify="end">
                        
                        <Menu/>
                    </FlexStyled>
                            
                        {/* <div style={{background: '#949494'}}></div> */}
                         {/* <ImgStyled src={require('../../img/svg/settings.svg').default} height="70%" cursor="pointer" /> */}
                    
                </HeaderContainer>
            </Wrapper>
            
        </HeaderContent>
    )
}