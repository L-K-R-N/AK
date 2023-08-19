import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { styled } from "styled-components";
import React from 'react'
import {useState} from 'react'
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setLikedCountriesNames } from "../../store/reducers/CountriesSlice";

export const FillHeart = styled(AiFillHeart)<HeartProps>`
    cursor: pointer;
    height: 100%;
    width: 100%;
    color: var(--red-color);
    transition: all 0.2s ease-out;

    &:hover {
        color: var(--second-text-color); 
    }


`

interface HeartProps {
    width?: string;
}

export const OutlineHeart = styled(AiOutlineHeart)<HeartProps>`
    cursor: pointer;
    height: 100%;
    width: 100%;
    color: var(--second-text-color);
    transition: all 0.2s ease-out;

    &:hover {
        color: var(--red-color); 
    }

`

const LikeButton = styled.button`
    background: transparent;
    border: none;
    outline: none;
    width: 33px;
    @media screen and (min-width: 500px) {
        width: 30px;
    }

    @media screen and (min-width: 900px) {
        width: 33px;
    }
`

interface Props {
    countryOfficialName: string;
}

export const Like: React.FC<Props> = ({countryOfficialName}) => {
    const dispatch = useAppDispatch()
    const {likedCountriesNames} = useAppSelector(state => state.countriesReducer)
    
    const isLiked = () => {
        return likedCountriesNames.includes(countryOfficialName) || false
    }
    const toggleLike = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        if (isLiked()) {
            const newLikedCountries = likedCountriesNames.filter(country => country !== countryOfficialName)
            dispatch(setLikedCountriesNames(newLikedCountries))
        } else {
            dispatch(setLikedCountriesNames([...likedCountriesNames, countryOfficialName]))
        }
        
        
        console.log(likedCountriesNames)
    }
    return (
        <LikeButton onClick={(e) => toggleLike(e)}>
            {isLiked() ? <FillHeart/> : <OutlineHeart/>}
        </LikeButton>
        
    )
}

