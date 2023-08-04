import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
import { IAttraction } from '../models/IAttraction'

export const attractionAPI = createApi({
    reducerPath: 'AttractionAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/'}),
    tagTypes: ['Attraction'],
    endpoints: (build) => ({
        fetchAllAttraction: build.query<IAttraction[], number>({
            query: (limit: number = 5) => ({
                url: '/attractions',
                params: {
                    _limit: limit,
                }
            }) 
        })
    })
})