import {useMemo} from 'react'
import { ICountry } from '../models/ICountry'

const useSortCountries = (sort: string, countries: ICountry[] | undefined) => {
    const sortedCountries = useMemo(() => {
        if (countries) {
            switch (sort) {
                case 'name':
                    return [...countries].sort((a, b) => a.name.common.localeCompare(b.name.common))  
                case 'population': 
                    return  [...countries].sort((a, b) => b.population - a.population)
                case 'area': 
                    return  [...countries].sort((a, b) => b.area - a.area)
                    
            }
            
        }
        

        
    }, [sort, countries])

    return sortedCountries
}

export const useFilterCountries = (query: string, countries: ICountry[] | undefined, sort: string, liked: string[], onlyLiked: boolean) => {
    const sortedCountries = useSortCountries(sort, countries)
    const onlyLikedSortedCountries = useLikedCountries(liked, sortedCountries)
    const sortedAndSearchedCountries = useMemo(() => {
        return onlyLiked 
                    ? 
                onlyLikedSortedCountries?.filter(country => country.name.common.toLowerCase().includes(query.toLowerCase()))
                    :
                sortedCountries?.filter(country => country.name.common.toLowerCase().includes(query.toLowerCase()))
    }, [query, countries, sort, liked, onlyLiked])

    return sortedAndSearchedCountries;
}

export const useLikedCountries = (liked: string[], countries: ICountry[] | undefined) => {

    const likedCountries = useMemo(() => {
        return countries?.filter(country => liked.includes(country.name.official))
    }, [liked, countries])

    return likedCountries
}

export const useGetCountriesByCodes = (countries: ICountry[] | undefined, codes: string[]) => {
    const countriesByCodes = useMemo(() => {
        return countries?.filter(country => codes.includes(country.cca3))
    }, [countries, codes])

    return countriesByCodes
}