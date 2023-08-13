import { Header } from "../components/Header"
import {useEffect} from 'react'
import { useAppSelector } from "../hooks/redux"



import { DivStyled } from "../components/Styled/DivStyled"
import SearchAndFilter from "../components/SearchAndFilter"
import { Wrapper } from "../components/Styled/Wrapper"
import { Countries } from "../components/Countries"
export const MainPage: React.FC = () => {
    const {currentTheme} = useAppSelector(state => state.themeReducer)

   
    return ( 
        <DivStyled width="100vw" >
            <Header/>
            <Wrapper margin=" 0 auto 5vh auto" >
                <SearchAndFilter/>
            </Wrapper>
            <Countries/>
        </DivStyled>
    )
}