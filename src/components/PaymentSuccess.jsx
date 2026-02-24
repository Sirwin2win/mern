import React,{useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
import { verify } from '../features/pay/paymentSlice'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'





const PaymentSuccess = () => {
    const [searchParams] = useSearchParams()
    const transaction_id = searchParams.get('transaction_id')
    const {status,paymentSuccess} = useSelector(state=>state.pay)
    const dispatch = useDispatch()
    console.log(transaction_id)

    useEffect(()=>{
        if(transaction_id){
          dispatch(verify(transaction_id))
        }
    },[transaction_id,dispatch])

    // useEffect(()=>{
    //     if(transaction_id){
    //       const res =  axios.get(`https://node-apis-vnla.onrender.com/api/payments/${transaction_id}`)
    //       return res.data
    //     }
    // },[transaction_id])
  return (
    <div>
        {/* <h3>Verifying Payment...</h3> */}
        <h3>{status==='succeeded'?res.data:'Verifying Payment...'}</h3>
    </div>
  )
}

export default PaymentSuccess