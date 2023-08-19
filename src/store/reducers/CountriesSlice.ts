import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface CountriesState {
    likedCountriesNames: string[]
}

const initialState: CountriesState = {
    likedCountriesNames: []
}

export const CountriesSlice = createSlice({
    name: 'Countries',
    initialState,
    reducers: {
        setLikedCountriesNames(state, action: PayloadAction<string[]>) {
            state.likedCountriesNames = action.payload
        }
    }
})

export const {
    setLikedCountriesNames
} = CountriesSlice.actions

export default CountriesSlice.reducer