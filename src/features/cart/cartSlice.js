import { createSlice } from "@reduxjs/toolkit";

const saveStorage = (cartInfo)=>{
    try {
        return localStorage.setItem('cartInfo',JSON.stringify(cartInfo))
    } catch (error) {
        return error.message
    }
}

const getStorage = ()=>{
    try {
        const data = localStorage.getItem('cartInfo')
        return data?JSON.parse(data):null
        // true?code for truty: code for falsy
    } catch (error) {
       return error.message 
    }
}

const initialState = 
getStorage() || {
    cartItems:[],
    totalAmount:0,
    totalQuantity:0
}
const products = [
    {id:1,title:'tthgggg'},
    {id:2,title:'tthgggg'},
]
// const {products,status,error} = useSelector(state=>state.products)| products.map(product=>)
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
       addToCart:(state,action)=>{
        const item = action.payload
        const existingItem  = state.cartItems.find(v=>v.id===item.id)
        if(existingItem){
            existingItem.quantity +=1
        }else{
            state.cartItems.push({...item,quantity:1})
        }
        state.totalAmount +=item.price
        state.totalQuantity +=1
        // save to local storage
        saveStorage(state)
       },
       removeFromCart:(state,action)=>{
        const id = action.payload
        const item = state.cartItems.find((v)=>v.id==id)
        if(item){
            state.totalAmount -= item.quantity * item.price
            state.totalQuantity -= item.quantity
        }
        state.cartItems = state.cartItems.filter(v=>v.id !==id)
        // save to local storage
        saveStorage(state)
       },
       increaseCart:(state,action)=>{
        const id = action.payload
        const item = state.cartItems.find(v=>v.id == id)
        if(item){
            item.quantity +=1
            state.totalQuantity +=1
            state.totalAmount +=item.price
        }
        // save to local storage
        saveStorage(state)
       },
       decreaseCart:(state,action)=>{
        const id = action.payload
        const item = state.cartItems.find(v=>v.id==id)
        if(item){
            item.quantity -=1
            state.totalQuantity -=1
            state.totalAmount -=item.price
        }
        if(item.quantity===0){
            state.cartItems = state.cartItems.filter(v=>v.id !==id)
        }
        // save to local storage
        saveStorage(state)
       },
       clearCart:(state,action)=>{
        state.cartItems =[]
        state.totalAmount = 0
        state.totalQuantity = 0
       }
    }
})

export const {addToCart,removeFromCart,increaseCart,decreaseCart,clearCart} = cartSlice.actions
export default cartSlice.reducer
