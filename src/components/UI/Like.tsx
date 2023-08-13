import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { styled } from "styled-components";
import React from 'react'
import {useState} from 'react'
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setLikedCountriesNames } from "../../store/reducers/FilterSlice";

export const FillHeart = styled(AiFillHeart)<HeartProps>`
    cursor: pointer;
    height: 100%;
    width: ${({width}) => width || '33px'};
    color: var(--red-color);
`

interface HeartProps {
    width?: string;
}

export const OutlineHeart = styled(AiOutlineHeart)<HeartProps>`
    cursor: pointer;
    height: 100%;
    width: ${({width}) => width || '33px'};
    color: var(--third-bg-color);
`



interface Props {
    countryOfficialName: string;
    like: boolean;
    setLike: (value: boolean) => void;
}

export const Like: React.FC<Props> = ({countryOfficialName, like, setLike}) => {
    const dispatch = useAppDispatch()
    const {likedCountriesNames} = useAppSelector(state => state.filterReducer)
    
    
    const toggleLike = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        if (like) {
            setLike(false)
            const newLikedCountries = likedCountriesNames.filter(country => country !== countryOfficialName)
            dispatch(setLikedCountriesNames(newLikedCountries))
        } else {
            setLike(true)
            dispatch(setLikedCountriesNames([...likedCountriesNames, countryOfficialName]))
        }
        
        
        console.log(likedCountriesNames)
    }
    return (
        <button style={{background: 'transparent', outline: 'none', border: 'none'}} onClick={(e) => toggleLike(e)}>
            {like ? <FillHeart/> : <OutlineHeart/>}
        </button>
        
    )
}

