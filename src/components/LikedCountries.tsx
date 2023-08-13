import React from 'react'
import { styled } from 'styled-components'
import { Wrapper } from './Styled/Wrapper'
import { CountriesList } from './CountriesList'
import { useState} from 'react'
import { countriesAPI } from "../services/CountriesService"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { useFilterCountries, useLikedCountries } from '../hooks/useFilterCountry'
const CountriesStyled = styled.div`
    max-width: 100vw;
`

export const LikedCountries: React.FC = () => {
    const [limit, setLimit] = useState<number>(10)
    const {data: countries, isLoading, isError, isSuccess, isFetching} = countriesAPI.useFetchAllCountriesQuery(limit)
    const dispatch = useAppDispatch()
    const {sort, search, likedCountriesNames, onlyLiked} = useAppSelector(state => state.filterReducer)
    const filtredCountry = useFilterCountries(search, countries, sort, likedCountriesNames, onlyLiked)
    // const likedCountries = useLikedCountries(likedCountriesNames, countries)

    return(
        <CountriesStyled>
            <Wrapper >
                {isLoading && <h1>Loading</h1>}
                {isError && <h1>Error</h1>}
                {/* <CountriesList countries={likedCountries ? likedCountries : []}/> */}
            </Wrapper>
        </CountriesStyled>
    )
}

