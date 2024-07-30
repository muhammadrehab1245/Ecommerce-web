import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//import axios from "axios";
import { FetchPrices, Fetchallproducts, Fetchcategories, Productslength, fetchProductById } from "./Itemsapi";

const initialState = {
    items: [],
    totallength:0,
    category: [],
    price: [],
    selectedItem: null,
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'

}

export const FetchallproductsAsync = createAsyncThunk('items/fetchItems', async (obj) => {
    const response = await Fetchallproducts(obj)
    return response
})

/*
export const FetchallproductsAsync2 = createAsyncThunk('items/fetchItems2', async () => {
    console.log('ahh')
    const response = await Fetchallproducts2()
  
    return response
}) */

export const fetchProductByIdAsync = createAsyncThunk('items/fetchItembyId', async (id) => {
    console.log(id)
    const response = await fetchProductById(id)
    console.log(response)
    return response
}) 
export const Fetchcategoriesasync = createAsyncThunk('items/fetchctg', async () => {
    const response = await Fetchcategories()
    return response
})
export const FetchPricesAsync = createAsyncThunk('items/fetchprice', async () => {
    const response = await FetchPrices()
    return response
})
export const ProductslengthAsync = createAsyncThunk('items/fetchlength', async (obj) => {
    const response = await Productslength(obj)
    
    return response
})



const Itemslice = createSlice({
    name: 'items',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(FetchallproductsAsync.pending, (state, action) => {
                state.status = 'loading'
                
            })
            .addCase(FetchallproductsAsync.fulfilled, (state, action) => {
                state.status = 'succeeded'
                console.log(action.payload)
                state.items=action.payload
            })
            .addCase(FetchallproductsAsync.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            /*
            .addCase(FetchallproductsAsync2.pending, (state, action) => {
                state.status = 'loading'
                
            })
            .addCase(FetchallproductsAsync2.fulfilled, (state, action) => {
                state.status = 'succeeded'
                console.log(action.payload)
                state.selectedItem=action.payload
            })
            .addCase(FetchallproductsAsync2.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            }) */
            .addCase(fetchProductByIdAsync.pending, (state, action) => {
                state.status = 'loading'
                
            })
            .addCase(fetchProductByIdAsync.fulfilled, (state, action) => {
                state.status = 'succeeded'
                console.log(action.payload)
                state.selectedItem=action.payload
            })
            .addCase(fetchProductByIdAsync.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            }) 
            .addCase(ProductslengthAsync.pending, (state, action) => {
                state.status = 'loading'
                
            })
            .addCase(ProductslengthAsync.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.totallength=action.payload.length
            })
            .addCase(ProductslengthAsync.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(Fetchcategoriesasync.pending, (state, action) => {
                state.status = 'loading'
                
            })
            .addCase(Fetchcategoriesasync.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.category=action.payload
            })
            .addCase(Fetchcategoriesasync.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(FetchPricesAsync.pending, (state, action) => {
                state.status = 'loading'
                
            })
            .addCase(FetchPricesAsync.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.price=action.payload
            })
            .addCase(FetchPricesAsync.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
          
    }
})

export const selectItemById = (state, itemId) =>
    state.items.items?.find(item => item.id === itemId);

export const selectAllItems = (state) => state.items.items;
export const selectSingleItem = (state) => state.items.selectedItem;
export const selectItemlength = (state) => state.items.totallength;
export const selectCategory = (state) => state.items.category;
export const selectprice = (state) => state.items.price;
export const getPostsItems = (state) => state.items.status;
export const getItemsError = (state) => state.items.error;
export const selectItemStatus= (state) => state.items.status;


//export const { postAdded, reactionAdded } = postsSlice.actions

export default Itemslice.reducer