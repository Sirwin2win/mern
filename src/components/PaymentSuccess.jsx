import React,{useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
import { verify } from '../features/pay/paymentSlice'
import { useDispatch, useSelector } from 'react-redux'




const PaymentSuccess = () => {
    const [searchParams] = useSearchParams()
    const transaction_id = searchParams.get('transaction_id')
    const {status,paymentSuccess} = useSelector(state=>state.pay)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(transaction_id){
            dispatch(verify(transaction_id))
        }
    },[])
  return (
    <div>
        <h3>{status==='succeeded'?paymentSuccess:'Verifying Payment...'}</h3>
    </div>
  )
}

export default PaymentSuccess