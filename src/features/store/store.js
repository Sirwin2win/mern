import { configureStore } from "@reduxjs/toolkit";
import productSlice from '../products/productSlice'
import singleSlice from '../products/singleSlice'
import authSlice from '../auth/authSlice'

const store = configureStore({
    reducer:{
        products:productSlice,
        product:singleSlice,
        auth:authSlice,
    }
})

export default store