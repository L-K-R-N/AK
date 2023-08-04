import { combineReducers } from "redux";
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import { attractionAPI } from "../services/AttractionService";
import filterReducer from './reducers/FilterSlice'
import themeReducer from './reducers/ThemeSlice'
const rootReducer = combineReducers({
    filterReducer,
    themeReducer,
    [attractionAPI.reducerPath]: attractionAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(attractionAPI.middleware)
        
        
            
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']