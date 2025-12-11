import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CheckUser, CreateUser, Login } from "./Authapi";
//import axios from "axios";

const initialState = {
    users: [],
    isLogin:null,
    auth:localStorage.getItem('auth')?JSON.parse(localStorage.getItem('auth')):null,
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
export const LoginAsync = createAsyncThunk('auth/login', async (obj) => {
    const response = await Login(obj)
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
             localStorage.removeItem('auth')
            state.auth=null
        },
    },
    extraReducers(builder) {
        builder
            .addCase(CreateUserAsync.pending, (state, action) => {
                state.status = 'loading'
                
            })
            .addCase(CreateUserAsync.fulfilled, (state, action) => {
                state.status = 'succeeded'
              localStorage.setItem('auth',JSON.stringify(action.payload.data))
                state.auth=action.payload.data
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
             .addCase(LoginAsync.pending, (state, action) => {
                state.status = 'loading'
                
            })
            .addCase(LoginAsync.fulfilled, (state, action) => {
                state.status = 'succeeded'
                localStorage.setItem('auth',JSON.stringify(action.payload.data))
                state.auth=action.payload.data
            })
            .addCase(LoginAsync.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            
    }
})

//export const { Itemadded, reactionAdded } = postsSlice.actions 

export const SelectUser = (state) => state.users.users;
export const SelectIsLogin = (state) => state.users.isLogin;
export const SelectAuth = (state) => state.users.auth;
export const SelectError = (state) => state.users.error;
export const { LogOut} = Authslice.actions
export default Authslice.reducer