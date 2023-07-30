import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'

export const attractionAPI = createApi({
    reducerPath: 'AttractionAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/'}),
    tagTypes: ['Attraction'],
    endpoints: (build) => ({
        fetchAllAttraction: build.query({
            query: () => ({
                url: '/attractions',

            })
        })
    })
})