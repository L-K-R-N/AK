import React from 'react'
import { styled } from 'styled-components'
import { countriesOptions } from '../forms/selects/options/AddressOptions'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { setSort } from '../store/reducers/FilterSlice'


const SortSelect = styled.select`
    border-radius: 88px;
    background: var(--second-bg-color);
    color: var(--text-color);
    padding: 4% 11%;
    border: none;
    font-family: var(--family);
    width: 100%;
    height: 100%;
    
    cursor: pointer;
    outline: 1px solid var(--second-bg-color);
    transition: all 0.1s ease-out;
    &:focus {
        outline: 2px solid var(--second-text-color);
    }
    &:hover {
        outline: 2px solid var(--second-text-color);
        
    }

`

const sortedOptions = [
    {
        label: 'По названию',
        value: 'name',
    },
    {
        label: 'По населению',
        value: 'population',
    },
    {
        label: 'По территории',
        value: 'area',
    },

]
export const Sort = () => {

    const dispatch = useAppDispatch()
    const func = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setSort(e.target.value))
    }
    return(
        <SortSelect onChange={(e) => func(e)}>
            {sortedOptions.map(option => 
                <option value={option.value}>{option.label}</option>
            )}
        </SortSelect>
    )
}

export default Sort