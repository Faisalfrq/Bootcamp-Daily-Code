import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../feature/counter/counterSlice'

export const store = configureStore({ 
    reducer: {
        counter: counterReducer,
    }, 
    devTools: true 
}) //reducer updates the store