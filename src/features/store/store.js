import { configureStore } from "@reduxjs/toolkit";
import productSlice from '../products/productSlice'
import singleSlice from '../products/singleSlice'

const store = configureStore({
    reducer:{
        products:productSlice,
        product:singleSlice,
    }
})

export default store