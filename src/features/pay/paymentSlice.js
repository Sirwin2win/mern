import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const API = 'https://node-apis-vnla.onrender.com/api/payments'

export const addPay = createAsyncThunk(
    'pay/addPay',
    async(checkout,thunkAPI)=>{
        try {
            const response = await axios.post('https://node-apis-vnla.onrender.com/api/payments',checkout)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

const paymentSlice = createSlice({
    name:'pay',
    initialState:{
        pay:[],
        status:'idle',
        error:null,
        paymentUrl:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        // addPay
        .addCase(addPay.pending,(state)=>{
            state.status = 'loading'
            state.error = null
        })
        .addCase(addPay.fulfilled,(state,action)=>{
            state.status = 'succeeded'
            state.paymentUrl = action.payload.link
        })
        .addCase(addPay.rejected,(state,action)=>{
            state.status = 'failed'
            state.error = action.payload
        })
    }
})


export default paymentSlice.reducer