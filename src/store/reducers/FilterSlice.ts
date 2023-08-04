import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAddress } from "../../models/IForm";


export interface FilterState {
    openedFilters: boolean;
    address: IAddress;
}
const initialState: FilterState = {
    openedFilters: false,
    address: {
        country: 'Russia',
        city: 'Smolensk',
        district: 'Zadneprovskiy',
        street: 'AK',
    }

}

export const FilterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeOpenedFilters(state, action: PayloadAction<boolean>) {
            state.openedFilters = action.payload
        },
        changeAddressCountry(state, action: PayloadAction<string | string[]>) {
            state.address.country = action.payload
        },
        changeAddressCity(state, action: PayloadAction<string | string[]>) {
            state.address.city = action.payload
        },
        changeAddressDistrict(state, action: PayloadAction<string | string[]>) {
            state.address.district = action.payload
        },
        changeAddressStreet(state, action: PayloadAction<string | string[]>) {
            state.address.street = action.payload
        },
    }
})  

export const {changeOpenedFilters, changeAddressCountry, changeAddressCity, changeAddressDistrict, changeAddressStreet} = FilterSlice.actions

export default FilterSlice.reducer