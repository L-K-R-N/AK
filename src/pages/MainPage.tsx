import { Header } from "../components/Header"
import {useEffect} from 'react'
import { useAppSelector } from "../hooks/redux"



import { DivStyled } from "../components/Styled/DivStyled"
import SearchAndFilter from "../components/SearchAndFilter"
import { Wrapper } from "../components/Styled/Wrapper"
import { Countries } from "../components/Countries"
import { SideMenu } from "../components/SideMenu"
import { styled } from "styled-components"

const Content = styled.div`
    display: flex;
    width: 100vw;
    height: 100%;
    justify-content: end;
    flex-wrap: nowrap;
`
const ContentMain = styled.div<ContentMainProps>`
    width: 100vw;
    height: 100%;
    transition: all 0.3s ease-in-out;
    
`

interface ContentMainProps {

}


export const MainPage: React.FC = () => {

    
    return ( 
        <Content>
            <ContentMain >
                <Header/>
                <Wrapper  margin=" 0 auto 5vh auto" >
                    <SearchAndFilter/>
                </Wrapper>
                <Countries/>
            </ContentMain>
            {/* <SideMenu/> */}
        </Content>
    )
}