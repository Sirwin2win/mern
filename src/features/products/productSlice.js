import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react";


const API = 'https://node-apis-vnla.onrender.com/api/products'


//  create product using javascript fetch
// export const createProduct = createAsyncThunk(
//     'products/createProduct',
//     async(formData,thunkAPI)=>{
//         try {
//             const response = await fetch(API,{
//             method:'POST',
//             headers:{
//                 'Content-type':'application/json'
//             },
//             body:JSON.stringify(formData)
//         })

//         const data = await response.json()
//         return data
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.message)
//         }
//     }
// )
// create product using axios
export const createProduct = createAsyncThunk(
    'products/createProduct',
    async(formData,thunkAPI)=>{
        try {
            const response = await axios.post(API,formData)
        return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)
// fetching products using the fetch method
// export const fetchProducts = createAsyncThunk(
//     'products/fetchProducts',
//     async(_,thunkAPI)=>{
//         try {
//             const response = await fetch(API)
//             const data = response.json()
//             return data
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.message)
//         }
//     }
// )

// fetch all the  products using axios
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (_,thunkAPI) => {
try {
            const response = await axios.get(API)
        return response.data
} catch (error) {
    return thunkAPI.rejectWithValue(error.message)
}
    }
)

// delete a product

export const deleteProduct = createAsyncThunk(
    'products/deleteProduct',
    async(id,thunkAPI)=>{
        try {
         await axios.delete(`${API}/${id}`)
         return id;

        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)
// update Products
export const update = createAsyncThunk(
    'products/update',
    async({id, formData},thunkAPI)=>{
        try {
            const res = await axios.put(`${API}/${id}`,formData)
        return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)
const productSlice = createSlice({
    name:'products',
    initialState:{
        products:[],
        status:'idle', // loading, suceeded, failed
        error:null,
        // godwin:null`
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        //create products
        .addCase(createProduct.pending,(state)=>{
            state.status = 'loading'
            state.error = null
        })
        .addCase(createProduct.fulfilled,(state,action)=>{
            state.status = 'succeeded'
            state.products.push(action.payload)
        })
        .addCase(createProduct.rejected,(state,action)=>{
            state.status = 'failed'
            state.error = action.payload
        })
        // fetch all products
        .addCase(fetchProducts.pending,(state)=>{
            state.status = 'loading'
            state.error = null
        })
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.status = 'succeeded'
            state.products = action.payload
        })
        .addCase(fetchProducts.rejected, (state,action)=>{
            state.status = 'failed'
            state.error = action.payload
        })
        // delete product
        .addCase(deleteProduct.pending,(state)=>{
            state.status = 'loading'
            state.error = null
        })
        .addCase(deleteProduct.fulfilled,(state,action)=>{
            state.status = 'secceeded'
            const id = action.payload
            state.products = state.products.filter(v=> v._id !== id)
        })
        .addCase(deleteProduct.rejected,(state,action)=>{
            state.status = 'failed'
            state.error = action.payload
        })

        // update product
        .addCase(update.pending,(state)=>{
            state.status = 'loading'
            state.error = null
        })
        .addCase(update.fulfilled, (state,action)=>{
            state.status = 'succeeded'
            const updated = action.payload
            const index = state.products.findIndex(v=>v._id===updated._id)
            if(index !==-1){
                state.products[index] = updated
            }
        })
        .addCase(update.rejected,(state,action)=>{
            state.status = 'failed'
            state.error = action.payload
        })
    }
})

export default productSlice.reducer
