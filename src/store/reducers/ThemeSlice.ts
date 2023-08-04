import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ThemeState {
    currentTheme: string;
}

const initialState: ThemeState = {
    currentTheme: 'dark'
}

export const ThemeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme(state, action: PayloadAction<string>) {
            state.currentTheme = action.payload
        }
    }
})

export const {changeTheme} = ThemeSlice.actions

export default ThemeSlice.reducer