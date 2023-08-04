import { AttractionsList } from "../components/AttractionsList"
import { Filter } from "../components/Filter"
import { FlexStyled } from "../components/Styled/FlexStyled"
import { Header } from "../components/UI/Header"
import {useEffect, useState} from 'react'
import { changeTheme } from "../store/reducers/ThemeSlice"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
export const MainPage: React.FC = () => {
    const dispatch = useAppDispatch()
    const {currentTheme} = useAppSelector(state => state.themeReducer)

   
    return ( 
        <div >
            <Header/>
            {/* <Filter /> */}
            <AttractionsList/>
        </div>
    )
}