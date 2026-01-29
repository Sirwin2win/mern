import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, decreaseCart, increaseCart, removeFromCart } from '../features/cart/cartSlice'
import { FaPlus,FaMinus  } from "react-icons/fa";

const CartPage = () => {
    const dispatch = useDispatch()
    const {cartItems,totalQuantity,totalAmount} = useSelector(state=>state.carts)
  return (
    <div className='container'>
        <h1>Cart Items</h1>
        <div className="row">
            {cartItems.map(cart=>(
                <div>

                    <img src={`https://node-apis-vnla.onrender.com/${cart.image}`} alt='' className="col-sm-4" />
                    <div className="col-sm-4">
                        <h5>Item : {cart.title}</h5>
                        <p>Price : ${cart.price}</p>
                        <div className="row">
                            <FaPlus className="col-sm-5 my-5" onClick={()=>dispatch(increaseCart(cart._id))} />
                            <FaMinus className="col-sm-5 my-5" onClick={()=>dispatch(decreaseCart(cart._id))} />

                            {/* <h5 className="col-sm-5" style={{fontSize:'30px'}} onClick={()=>dispatch(increaseCart(cart._id))}>+</h5> */}
                            {/* <h5 className="col-sm-5" style={{fontSize:'40px'}} onClick={()=>dispatch(decreaseCart(cart._id))}>-</h5> */}
                        </div>
                        <p>Quantity: {cart.quantity}</p>
                    </div>
                    <hr />
                    

                </div>
            ))}
            <button className='btn btn-danger' onClick={()=>dispatch(clearCart())}>Clear Cart</button>
                    <p>Total Amount :{totalAmount}</p>
                    <p>TotalQuantity :{totalQuantity}</p>
        </div>

    </div>
  )
}

export default CartPage