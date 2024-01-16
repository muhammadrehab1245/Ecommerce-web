import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AddCart, DeleteCart, EmptyingCard, FetchCart, FetchcartById, UpdateCart } from "./Cartapi";
//import axios from "axios";

const initialState = {
    cart: [],
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}

export const FetchcartAsync = createAsyncThunk('items/fetchCart', async () => {
    const response = await FetchCart()
    return response
})
export const FetchcartByIdAsync = createAsyncThunk('items/fetchCartbyId', async (userid) => {
    const response = await FetchcartById(userid)
    return response
})
export const AddCartAsync = createAsyncThunk('items/AddCart', async (obj) => {
    const response = await AddCart(obj)
    return response
})

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
})


const Cartslice = createSlice({
    name: 'carts',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder
      /*  .addCase(FetchcartAsync.pending, (state, action) => {
            state.status = 'loading'
            
        })
        .addCase(FetchcartAsync.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.cart=action.payload
        })
        .addCase(FetchcartAsync.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        }) */
        .addCase(FetchcartByIdAsync.pending, (state, action) => {
            state.status = 'loading'
            
        })
        .addCase(FetchcartByIdAsync.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.cart=action.payload
        })
        .addCase(FetchcartByIdAsync.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
            .addCase(AddCartAsync.pending, (state, action) => {
                state.status = 'loading'
                
            })
            .addCase(AddCartAsync.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.cart.push(action.payload)
            })
            .addCase(AddCartAsync.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(UpdateCartAsync.pending, (state, action) => {
                state.status = 'loading'                
            })
            .addCase(UpdateCartAsync.fulfilled, (state, action) => {
                state.status = 'succeeded'
                
                let index=state.cart.findIndex(cartitem=>cartitem.id===action.payload.id)
                state.cart[index]=action.payload
            })
            .addCase(UpdateCartAsync.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(DeleteCartAsync.pending, (state, action) => {
                state.status = 'loading'
                
            })
            .addCase(DeleteCartAsync.fulfilled, (state, action) => {
                state.status = 'succeeded'
                const index =  state.cart.findIndex(item=>item.id===action.payload.id)
                state.cart.splice(index,1);


            })
            .addCase(DeleteCartAsync.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })  
            .addCase(EmptyingCardAsync.pending, (state, action) => {
                state.status = 'loading'
                
            })
            .addCase(EmptyingCardAsync.fulfilled, (state, action) => {
                state.status = 'succeeded'
              state.cart=[]
            })
            .addCase(EmptyingCardAsync.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })  
    }
})

//export const { Itemadded, reactionAdded } = postsSlice.actions

export const SelectCart = (state) => state.carts.cart;
export default Cartslice.reducer