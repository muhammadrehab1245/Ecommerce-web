import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CreateOrder,  Fetchallorder,/* updateOrder */ } from "./Orderapi";
//import axios from "axios";

const initialState = {
    orders: [],
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    currentOrder: null
}

export const FetchOrderAsync = createAsyncThunk('items/fetchorder', async () => {
    const response = await Fetchallorder()
    return response
})
export const UpdateOrderAsync = createAsyncThunk('items/updateorder', async () => {
    const response = await updateOrder()
    return response
})
export const createOrderAsync = createAsyncThunk('items/createorder', async (obj) => {
    const response = await CreateOrder(obj)
    return response
})

const Orderslice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        resetOrder:(state)=>{
            state.currentOrder=null
        }
    },
    extraReducers(builder) {
        builder
            .addCase(FetchOrderAsync.pending, (state, action) => {
                state.status = 'loading'
                
            })
            .addCase(FetchOrderAsync.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.orders=action.payload
            })
            .addCase(FetchOrderAsync.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(createOrderAsync.pending, (state, action) => {
                state.status = 'loading'
                
            })
            .addCase(createOrderAsync.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.orders.push(action.payload)
                state.currentOrder=action.payload
            })
            .addCase(createOrderAsync.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(UpdateOrderAsync.pending, (state, action) => {
                state.status = 'loading'
                
            })
            .addCase(UpdateOrderAsync.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.category=action.payload
            })
            .addCase(UpdateOrderAsync.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            }) 
    }
})

export const selectOrderById = (state, orderId) =>
    state?.orders?.orders.find(order => order.id === orderId);

    export const { resetOrder} = Orderslice.actions
    export const SelectOrder = (state) => state.orders.orders;
    export const SelectOrderStatus = (state) => state.orders.status;
    export const selectCurrentOrder = (state) => state.orders.currentOrder;

export default Orderslice.reducer