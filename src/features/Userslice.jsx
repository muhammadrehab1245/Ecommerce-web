import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FetchLoginUser, FetchLoginOrder } from "./Userapi";

const initialState = {
    userOrder: [],
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    userinfo: null
}


export const FetchLoginUserAsync = createAsyncThunk('items/loginfetchuser', async (id) => {
    const response = await FetchLoginUser(id)
    return response
}) 
export const FetchLoginOrderAsync = createAsyncThunk('items/loginorder', async (id) => {
    const response = await FetchLoginOrder(id)
    return response
})

const Userslice = createSlice({
    name: 'existusers',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(FetchLoginUserAsync.pending, (state, action) => {
                state.status = 'loading'
                
            })
            .addCase(FetchLoginUserAsync.fulfilled, (state, action) => {
                state.status = 'succeeded'
               // state.users.push(action.payload)
               state.userinfo=action.payload
            })
            .addCase(FetchLoginUserAsync.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(FetchLoginOrderAsync.pending, (state, action) => {
                state.status = 'loading'
                
            })
            .addCase(FetchLoginOrderAsync.fulfilled, (state, action) => {
                state.status = 'succeeded'
               // state.users.push(action.payload)
               state.userOrder=action.payload
            })
            .addCase(FetchLoginOrderAsync.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            
    }
})
export const SelectUserOrder = (state) => state.existuser.userOrder;
export const SelectUserInfo = (state) => state.existuser.userinfo;
export const SelectError = (state) => state.users.error;
export default Userslice.reducer