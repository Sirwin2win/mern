import { configureStore } from "@reduxjs/toolkit";
import productSlice from '../products/productSlice'
import singleSlice from '../products/singleSlice'
import authSlice from '../auth/authSlice'
import cartSlice from '../cart/cartSlice'
import orderSlice from '../order/orderSlice'
import paymentSlice from '../pay/paymentSlice'

const store = configureStore({
    reducer:{
        products:productSlice,
        product:singleSlice,
        auth:authSlice,
        carts:cartSlice,
        orders:orderSlice,
        pay:paymentSlice
    }
})

export default store