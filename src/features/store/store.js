import { configureStore } from "@reduxjs/toolkit";
import productSlice from '../products/productSlice'
import singleSlice from '../products/singleSlice'
import authSlice from '../auth/authSlice'
import cartSlice from '../cart/cartSlice'

const store = configureStore({
    reducer:{
        products:productSlice,
        product:singleSlice,
        auth:authSlice,
        carts:cartSlice
    }
})

export default store