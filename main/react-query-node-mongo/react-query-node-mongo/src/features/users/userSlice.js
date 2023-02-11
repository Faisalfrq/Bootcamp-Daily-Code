// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => `getAll/`,
            providesTags: ['User'],
        }),
        getUserById: builder.query({
            query: (id) => `getOneUser/${id}`
        }),
        updateUserById: builder.mutation({
            query: ({ id, payload }) => ({
                    url: `/updateUser/${id}`,
                    method: 'PUT',
                    body: payload,
                }),
            // Pick out data and prevent nested properties in a hook or selector
            transformResponse: (response, meta, arg) => {
                return response.data
            },
            // Pick out errors and prevent nested properties in a hook or selector
            transformErrorResponse: (response, meta, arg) => {
                return response.status
            },
            invalidatesTags: ['User'],
        }),
        deleteUserById: builder.mutation({
            query: (id) => ({
                    url: `/deleteUser/${id}`,
                    method: 'DELETE',
                }),
            // Pick out data and prevent nested properties in a hook or selector
            transformResponse: (response, meta, arg) => {
                return response.data
            },
            // Pick out errors and prevent nested properties in a hook or selector
            transformErrorResponse: (response, meta, arg) => {
                return response.status
            },
            invalidatesTags: ['User'],
        }),
        addUser: builder.mutation({
            query: (payload) =>({
                url: 'addUser/',
                method: 'POST',
                body: payload
            }),
            // Pick out data and prevent nested properties in a hook or selector
            transformResponse: (response, meta, arg) => {
                return response.data
            },
            // Pick out errors and prevent nested properties in a hook or selector
            transformErrorResponse: (response, meta, arg) => {
                return response.status
            },
            invalidatesTags: ['User'],
        })
    }),
})

export const {
    useGetUsersQuery,
    useGetUserByIdQuery,
    useUpdateUserByIdMutation,
    useDeleteUserByIdMutation,
    useAddUserMutation,
} = userApi


// const initialState = {
//     loading: false,
//     users: []
// }

// export const getUsers = createAsyncThunk(
//     'users/getUsers',
//     async (thunkAPI) => {
//         const res = await fetch('http://localhost:8080/getAll')
//             .then(
//                 (data) => data.json()
//             )
//         return res
//     })

// const userSlice = createSlice({
//     name: 'users',
//     initialState,
//     reducers: {},
//     extraReducers: {
//         [getUsers.pending]: (state) => {
//             state.loading = true
//         },
//         [getUsers.fulfilled]: (state, { payload }) => {
//             state.loading = false
//             state.users = payload
//         },
//         [getUsers.rejected]: (state) => {
//             state.loading = false
//         },
//     }
// })

// export default userSlice.reducer
