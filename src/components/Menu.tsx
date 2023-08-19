import React from 'react'
import { styled } from 'styled-components'
import { Navbar } from './Navbar'
import { DivStyled } from './Styled/DivStyled'
import { SideMenu } from './SideMenu'
import { Burger } from './UI/Burger'
import { setMenuActive } from '../store/reducers/FilterSlice'
import { useAppDispatch, useAppSelector } from '../hooks/redux'


const MenuStyled = styled.div`
    /* position: relative; */
    height: 100%;
    display: flex;
    align-items: center;
    gap: 3%;
`

export const Menu = () => {
    const dispatch = useAppDispatch()
    const {menuActive} = useAppSelector(state => state.filterReducer)
    const toggleMenuOpened = () => {
        dispatch(setMenuActive(menuActive ? false : true))
        console.log(menuActive)
    }
    return(
        <MenuStyled>
            <SideMenu />
            <Burger click={() => toggleMenuOpened()}/>
            
        </MenuStyled>
    )
}

