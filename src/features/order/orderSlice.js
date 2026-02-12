import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API = 'https://node-apis-vnla.onrender.com/api/orders'


// to create a order on the database. getting payload from the cartPage.jsx
export const createOrder = createAsyncThunk(
    'orders/createOrder',
    async(checkout,thunkAPI)=>{
       try {
         const response = await axios.post(API,checkout)
        return response.data
       } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
       }
    }
)
// orderSlice
const orderSlice = createSlice({
    name:'orders',
    initialState:{
        orders:[],
        status:'idle',
        error:null,
        orderRef:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        // createOrders
        .addCase(createOrder.pending,(state)=>{
            state.status = 'loading'
            state.error = null
        })
        .addCase(createOrder.fulfilled,(state,action)=>{
            state.status = 'succeeded'
            state.orderRef = action.payload
        })
        .addCase(createOrder.rejected,(state,action)=>{
            state.status = 'failed'
            state.error = action.payload
        })
    }
})

export default orderSlice.reducer

