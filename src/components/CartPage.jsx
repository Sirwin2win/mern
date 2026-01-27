import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, decreaseCart, increaseCart, removeFromCart } from '../features/cart/cartSlice'


const CartPage = () => {
    const dispatch = useDispatch()
    const {cartItems,totalQuantity,totalAmount} = useSelector(state=>state.cart)
  return (
    <div className='container'>
        <h1>Cart Items</h1>
        <div className="row">
            {cartItems.map(cart=>(
                <div>

                    <img src={`https://node-apis-vnla.onrender.com/${cart.image}`} alt='' className="col-sm-4" />
                    <div className="col-sm-4">
                        <h5>{cart.title}</h5>
                        <p>${cart.price}</p>
                        <div className="row">
                            <button className="col-sm-5" style={{fontSize:'30px'}} onClick={()=>dispatch(increaseCart(cart.id))}>+</button>
                            <button className="col-sm-5" style={{fontSize:'40px'}} onClick={()=>dispatch(decreaseCart(cart.id))}>-</button>
                        </div>
                        <p>{cart.quantity}</p>
                    </div>
                    <hr />
                    <button className='btn btn-danger' onClick={()=>dispatch(clearCart())}>Clear Cart</button>
                    <p>Total Amount :{totalAmount}</p>
                    <p>TotalQuantity :{totalQuantity}</p>

                </div>
            ))}
        </div>

    </div>
  )
}

export default CartPage