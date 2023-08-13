import React, { ChangeEvent } from 'react'
import { styled } from 'styled-components'
import { Input } from './Styled/Input'
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { setSearch } from '../store/reducers/FilterSlice';





export const Search: React.FC = () => {
    const dispatch = useAppDispatch()
    const {search} = useAppSelector(state => state.filterReducer)
   const searchAttraction = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearch(e.target.value))
        console.log(e.target.value)
   }
    return(
        <Input
            borderRadius='99px'
            onChange={(e) => searchAttraction(e)}
            value={search}
            type="text" 
            placeholder="Начать поиск" 
        />

    )
}

export default Search