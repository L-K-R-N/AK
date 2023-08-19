import React from 'react'
import { styled } from 'styled-components'
import { Wrapper } from './Styled/Wrapper'
import { CountriesList } from './CountriesList'
import { useState} from 'react'
import { countriesAPI } from "../services/CountriesService"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { useFilterCountries } from '../hooks/useFilterCountry'
import { Loader } from './UI/Loader'
import { FlexStyled } from './Styled/FlexStyled'
const CountriesStyled = styled.div`
    max-width: 100vw;
    margin-bottom: 7vh;
`

export const Countries: React.FC = () => {
    const [limit, setLimit] = useState<number>(10)
    const {data: countries, isLoading, isError} = countriesAPI.useFetchAllCountriesQuery(limit)
    const dispatch = useAppDispatch()
    const {sort, search, onlyLiked} = useAppSelector(state => state.filterReducer)
    const {likedCountriesNames} = useAppSelector(state => state.countriesReducer)
    const filtredCountries = useFilterCountries(search, countries, sort, likedCountriesNames, onlyLiked)
    

    return(
        <CountriesStyled>
            <Wrapper>
                {isLoading && 
                    <FlexStyled>
                        <Loader/>
                    </FlexStyled>
                }
                {isError && <h1>Error</h1>}
                <CountriesList countries={filtredCountries ? filtredCountries : []} />
            </Wrapper>
        </CountriesStyled>
    )
}

