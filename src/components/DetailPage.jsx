import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { fetchSingle } from '../features/products/singleSlice'
import { useDispatch, useSelector } from 'react-redux'




const DetailPage = () => {
    // initialize useParam and destructure the id from the url
    const {id} = useParams()
    const dispatch = useDispatch()
    // getting product from store using useSelector
    const {product, status, error} = useSelector((state)=>state.product)
    // const product = useSelector((state)=>state.product.product)
    // making a call to fetchSingle getting a specific product
    useEffect(()=>{
        if(id){
           dispatch(fetchSingle(id)) 
        }
    },[])
    console.log(product)
    if(status==='loading'){
        return <h1>Loading...</h1>
    }
  return (
    <div>
        <h1>Hello Details</h1>
        <div className="row">
            <div className="col-sm-4">
            <img src={`https://node-apis-vnla.onrender.com/${product.image}`} alt="" />
            </div>
            <div className="col-sm-6">
            <h5>{product.title}</h5>
            <p>{product.description}</p>
            </div>

        </div>
    </div>
  )
}

export default DetailPage