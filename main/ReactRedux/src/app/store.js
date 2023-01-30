import { configureStore } from '@reduxjs/toolkit'
import counterReducer, { userApi } from '../feature/counter/counterSlice'

export const store = configureStore({ 
    reducer: {
        counter: counterReducer,
        //[userApi.reducerPath]: userApi.reducer
    }, 
    //middleware: (getDefaultMiddleware) =>
    //getDefaultMiddleware().concat(userApi.middleware),
    //devTools: true 
}) //reducer updates the store