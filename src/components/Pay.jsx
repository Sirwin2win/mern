import React, {useEffect} from  'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { addPay } from '../features/pay/paymentSlice'


const Pay = () => {
    const {state} = useLocation()
    const dispatch = useDispatch()
    const {paymentUrl,status,error} = useSelector(state=> state.pay)
    const handleSubmit = (e) =>{
      e.preventDefault();
      const checkout = {
        orderRef:state.orderRef,
        amount:state.totalAmount,
        email:'email@example.com'
      }
      console.log(checkout)
      dispatch(addPay(checkout))

    }

    useEffect(()=>{
      if(paymentUrl){
        window.open(paymentUrl,'_blank')
      }
    },[paymentUrl])

  return (
    <div>
        <h5>Pay Here</h5>
        <button className='btn btn-primary m-5' onClick={handleSubmit}>Pay</button>
    </div>
  )
}

export default Pay