import React, {useState,useEffect} from 'react'
import { fetchProducts } from '../features/products/productSlice'
import { useDispatch, useSelector } from 'react-redux'

const Product = () => {
  const {products, status, error} = useSelector(state=> state.products)
  const dispatch = useDispatch()
  
  useEffect(()=>{
    if(status==='idle'){
      dispatch(fetchProducts())
    }
  },[status,dispatch])

  if(!products){
    return <h1>No products found</h1>
  }
  console.log(products)
  return (
    <div className='container'>
      <div className="row">

        <h1>Products Page</h1>
       {products.map((v)=>{
        <div className='col-sm-4' key={v.id}>
          <img src={`https://node-apis-vnla.onrender.com/${v.image}`} alt={v.title} />
          <h1>{v.title}</h1>
        </div>
       }
      
      )}
      </div>
    </div>
  )
}

export default Product