import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CreateOrder,  Fetchallorder,FetchOrderById, updateOrderStatus } from "./Orderapi";
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
export const FetchOrderByIdAsync = createAsyncThunk('items/fetchorderbyId', async (id) => {
    const response = await FetchOrderById(id)
    return response
})
export const createOrderAsync = createAsyncThunk('items/createorder', async (obj) => {
    const response = await CreateOrder(obj)
    return response
})
export const updateOrderStatusAsync = createAsyncThunk('items/updateorderstatus', async (obj) => {
    const response = await updateOrderStatus(obj)
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
            .addCase(FetchOrderByIdAsync.pending, (state, action) => {
                state.status = 'loading'
                
            })
            .addCase(FetchOrderByIdAsync.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.orders=action.payload
            })
            .addCase(FetchOrderByIdAsync.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            }) 
            .addCase(updateOrderStatusAsync.pending, (state, action) => {
                state.status = 'loading'
                
            })
            .addCase(updateOrderStatusAsync.fulfilled, (state, action) => {
                state.status = 'succeeded'
                let index=state.orders.findIndex(order=>order.id===action.payload.id)
                state.orders[index]=action.payload
            })
            .addCase(updateOrderStatusAsync.rejected, (state, action) => {
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