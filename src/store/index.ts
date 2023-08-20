import { combineReducers } from "redux";
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import { attractionAPI } from "../services/AttractionService";
import filterReducer from './reducers/FilterSlice'
import countriesReducer from './reducers/CountriesSlice'
import themeReducer from './reducers/ThemeSlice'
import { countriesAPI } from "../services/CountriesService";
import { 
    persistStore, 
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const rootReducer = combineReducers({
    filterReducer,
    countriesReducer,
    themeReducer,
    [attractionAPI.reducerPath]: attractionAPI.reducer,
    [countriesAPI.reducerPath]: countriesAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                  ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
              }).concat(attractionAPI.middleware, countriesAPI.middleware)
    })
}

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['countriesReducer', 'themeReducer']
  }

const persistedReducer = persistReducer(persistConfig, rootReducer)


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']