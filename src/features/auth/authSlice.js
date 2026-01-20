import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";


const API = 'https://node-apis-vnla.onrender.com/api/users'

export const register = createAsyncThunk(
    'users/register',
    async(forms,thunkAPI)=>{
        try {
            const res = await axios.post(`${API}/register`,forms)
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)
// Login User
export const login = createAsyncThunk(
    'auth/login',
async(forms, thunkAPI)=>{
    try {
        const res = await axios.post(`${API}/login`,forms)
        return res.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
}
)

const authSlice = createSlice({
    name:'auth',
    initialState:{
        users:[],
        status:'idle',
        error:null,
        user:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(register.pending,(state)=>{
            state.status = 'loading'
            state.error = null
        })
        .addCase(register.fulfilled, (state,action)=>{
            state.status = 'succeeded'
            state.error = null
        })
        .addCase(register.rejected,(state,action)=>{
            state.status = 'failed'
            state.error = action.payload
        })
        // login
        .addCase(login.pending,(state)=>{
            state.status = 'loading'
            state.error  = null
        })
        .addCase(login.fulfilled,(state,action)=>{
            state.status = 'succeeded'
            const {token} = action.payload
            try {
                const decoded = jwtDecode(token)
                state.user ={
                    id:decoded._id,
                    token,
                }
                localStorage.setItem('token',token)
            } catch (error) {
                state.error = error.message
            }
        })
        .addCase(login.rejected,(state,action)=>{
            state.status = 'failed'
            state.error = action.payload
        })
    }
})

export default authSlice.reducer