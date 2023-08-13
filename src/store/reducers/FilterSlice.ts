import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAddress } from "../../models/IForm";
import { IAttraction } from "../../models/IAttraction";
import { ICountry } from "../../models/ICountry";


export interface FilterState {
    sort: string;
    filtredCountries: ICountry[];
    likedCountriesNames: string[];
    // address: IAddress;
    search: string;
    openedFilters: boolean;
    onlyLiked: boolean;
}
const initialState: FilterState = {
    sort: 'area',
    filtredCountries: [],
    likedCountriesNames: [],
    // address: {
    //     country: ['Russia'],
    //     city: ['Smolensk'],
    //     district: ['Zadneprovskiy'],
    //     street: ['AK'],
    // },
    search: '',
    openedFilters: false,
    onlyLiked: false,

}

export const FilterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeOpenedFilters(state, action: PayloadAction<boolean>) {
            state.openedFilters = action.payload
        },

        // setAddressCountry(state, action: PayloadAction<string[]>) {
        //     state.address.country = action.payload
        // },
        // setAddressCity(state, action: PayloadAction<string[]>) {
        //     state.address.city = action.payload
        // },
        // setAddressDistrict(state, action: PayloadAction<string[]>) {
        //     state.address.district = action.payload
        // },
        // setAddressStreet(state, action: PayloadAction<string[]>) {
        //     state.address.street = action.payload
        // },

        setSearch(state, action: PayloadAction<string>) {
            state.search = action.payload
        },
        setSort(state, action: PayloadAction<string>) {
            state.sort = action.payload
        },

        setLikedCountriesNames(state, action: PayloadAction<string[]>) {
            state.likedCountriesNames = action.payload
        },
        setFiltredCountries(state, action: PayloadAction<ICountry[]>) {
            state.filtredCountries = action.payload
        },
        setOnlyLiked(state, action: PayloadAction<boolean>) {
            state.onlyLiked = action.payload
        },


    }
})  

export const {
    setFiltredCountries, 
    // setAddressCountry, 
    // setAddressCity, 
    // setAddressDistrict, 
    // setAddressStreet, 
    setSearch, 
    setSort, 
    setLikedCountriesNames,
    changeOpenedFilters,
    setOnlyLiked,
} = FilterSlice.actions

export default FilterSlice.reducer