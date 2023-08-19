import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IAttraction } from "../models/IAttraction";
import { ICountry } from "../models/ICountry";

export const countriesAPI = createApi({
    reducerPath: 'CountriesAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://restcountries.com/v3.1/'}),
    tagTypes: ['Countries'],
    endpoints: (build) => ({
        fetchAllCountries: build.query<ICountry[], number>({
            query: (limit: number = 5) => ({
                url: '/all',
                params: {
                    _limit: limit,
                }
            })
        }),

        fetchCountryByName: build.query<ICountry[], string | undefined>({
            query: (name: string) => ({
                url: `name/${name}`,

            })
        })
    })
})

