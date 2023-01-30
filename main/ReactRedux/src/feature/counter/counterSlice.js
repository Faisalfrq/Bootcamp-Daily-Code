import { createSlice } from '@reduxjs/toolkit'
//========================reactQuery================
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react' //Redux-Query
//import type { Pokemon } from './types'
// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/v2/' }),
  endpoints: (builder) => ({ //for queries an mutations
    getUser: builder.query({
      query: () => 'getAll',
    }),
    getUserbyId: builder.query({
      query:(id)=> `getOne/${id}`
    })
  }),
})
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserQuery, useGetUserbyIdQuery } = userApi
//====================================================
const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer