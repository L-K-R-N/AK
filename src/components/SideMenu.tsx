import React from 'react'
import { styled } from 'styled-components'
import { Navbar } from './Navbar'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { ProfileIco } from './UI/ProfileIco'
import { SettingsIco } from './UI/SettingsIco'
import { ThemeSwitcher } from './UI/ThemeSwitcher'


const MenuStyled = styled.div<SideMenuStyledProps>`
    display: flex;
    align-items: center;
    justify-content: space-around;
    /* position: absolute;
    top: 0;
    right: 100%; */
    width: ${(props) => (props.active ? '40vw' : '0')};
    /* transform: ${(props) => (props.active ? 'translateX(0)' : 'translateX(100%)')}; */
    height: 100%;

    transition: all 0.3s ease-in-out;
    overflow: hidden;
    @media screen and (min-width: 1080px) {
        max-width: ${(props) => (props.active ? '20vw' : '0')};
    }

    
`

interface SideMenuStyledProps {
    active: boolean;
}

export const SideMenu = () => {
    const {menuActive} = useAppSelector(state => state.filterReducer)
    return(
        <MenuStyled active={menuActive}>
            <ThemeSwitcher/>
            <ProfileIco/>
            <SettingsIco/>
            
            
            
            {/* <Navbar links={[
                {to: 'profile', value: 'Профиль'}
            ]}/> */}
        </MenuStyled>
    )
}

