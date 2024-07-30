import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CheckUser, CreateUser } from "./Authapi";
//import axios from "axios";

const initialState = {
    users: [],
    isLogin:null,
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}


export const CreateUserAsync = createAsyncThunk('items/createuser', async (obj) => {
    const response = await CreateUser(obj)
    return response
}) 
export const CheckUserAsync = createAsyncThunk('items/checkUser', async (obj) => {
    const response = await CheckUser(obj)
    return response
})
/*
export const DeleteCartAsync = createAsyncThunk('items/deleteCart', async (id) => {
    const response = await DeleteCart(id)
    
    return response.data
})
export const UpdateCartAsync = createAsyncThunk('items/UpdateCart', async (obj) => {
    const response = await UpdateCart(obj)
    return response
})
export const EmptyingCardAsync = createAsyncThunk('items/EmptyCart', async (obj) => {
    const response = await EmptyingCard(obj)
    return response
}) */


const Authslice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        LogOut:(state)=>{
            state.isLogin=null
        }
    },
    extraReducers(builder) {
        builder
            .addCase(CreateUserAsync.pending, (state, action) => {
                state.status = 'loading'
                
            })
            .addCase(CreateUserAsync.fulfilled, (state, action) => {
                state.status = 'succeeded'
               // state.users.push(action.payload)
               state.isLogin=action.payload
            })
            .addCase(CreateUserAsync.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(CheckUserAsync.pending, (state, action) => {
                state.status = 'loading'
                
            })
            .addCase(CheckUserAsync.fulfilled, (state, action) => {
                state.status = 'succeeded'
               // state.users.push(action.payload)
               state.isLogin=action.payload
            })
            .addCase(CheckUserAsync.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            
    }
})

//export const { Itemadded, reactionAdded } = postsSlice.actions 

export const SelectUser = (state) => state.users.users;
export const SelectIsLogin = (state) => state.users.isLogin;
export const SelectError = (state) => state.users.error;
export const { LogOut} = Authslice.actions
export default Authslice.reducer