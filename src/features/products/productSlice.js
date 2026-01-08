import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


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

const productSlice = createSlice({
    name:'products',
    initialState:{
        products:[],
        status:'idle', // loading, suceeded, failed
        error:null
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
    }
})

export default productSlice.reducer
