import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAddress } from "../../models/IForm";
import { IAttraction } from "../../models/IAttraction";
import { ICountry } from "../../models/ICountry";


export interface FilterState {
    sort: string;
    filtredCountries: ICountry[];
    // address: IAddress;
    search: string;
    openedFilters: boolean;
    onlyLiked: boolean;
    menuActive: boolean;
}
const initialState: FilterState = {
    sort: 'area',
    filtredCountries: [],
    // address: {
    //     country: ['Russia'],
    //     city: ['Smolensk'],
    //     district: ['Zadneprovskiy'],
    //     street: ['AK'],
    // },
    search: '',
    openedFilters: false,
    onlyLiked: false,
    menuActive: false,
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

        setFiltredCountries(state, action: PayloadAction<ICountry[]>) {
            state.filtredCountries = action.payload
        },
        setOnlyLiked(state, action: PayloadAction<boolean>) {
            state.onlyLiked = action.payload
        },
        setMenuActive(state, action: PayloadAction<boolean>) {
            state.menuActive = action.payload
        }

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
    changeOpenedFilters,
    setOnlyLiked,
    setMenuActive,
} = FilterSlice.actions

export default FilterSlice.reducer