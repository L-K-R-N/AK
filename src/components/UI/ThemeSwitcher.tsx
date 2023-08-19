import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { styled } from "styled-components";
import React, { useEffect } from 'react'
import {useState} from 'react'
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setLikedCountriesNames } from "../../store/reducers/CountriesSlice";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { changeTheme } from "../../store/reducers/ThemeSlice";

export const DarkMode = styled(MdOutlineDarkMode)<ThemeSwitcherProps>`
    cursor: pointer;
    height: 100%;
    width: ${({width}) => width || '40px'};
    color: var(--second-text-color);
    transition: all 0.2s ease-out;

    &:hover {
        color: var(--text-bg-color); 
    }

    @media screen and (min-width: 768px) {
        width: ${({width}) => width || '50px'};
    }
`

interface ThemeSwitcherProps {
    width?: string;
}

export const LightMode = styled(MdOutlineLightMode)<ThemeSwitcherProps>`
    cursor: pointer;
    height: 100%;
    width: ${({width}) => width || '35px'};
    color: var(--second-text-color);
    transition: all 0.2s ease-out;

    &:hover {
        color: var( --text-color); 
    }

    @media screen and (min-width: 768px) {
        width: ${({width}) => width || '50px'};
    }
`


const ThemeSwitcherButton = styled.div`
    height: 100%;
    background: transparent;
    outline: none;
    border: none;
`


export const ThemeSwitcher: React.FC = () => {
    const dispatch = useAppDispatch()
    const {currentTheme} = useAppSelector(state => state.themeReducer)

    const toggleTheme = () => {
        dispatch(changeTheme(currentTheme === 'light' ? 'dark' : 'light'))
    }

    useEffect(() => {
        document.body.setAttribute('data-theme', currentTheme)
    }, [currentTheme])

    return (
        <ThemeSwitcherButton onClick={toggleTheme}>
            {currentTheme === 'light' ? <DarkMode/> : <LightMode/>}
        </ThemeSwitcherButton>
        
    )
}

