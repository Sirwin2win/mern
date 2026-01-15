import React, {useState,useEffect} from 'react'
import { fetchProducts } from '../features/products/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Product = () => {
  const {products, status, error} = useSelector(state=> state.products)
  const dispatch = useDispatch()
  
  useEffect(()=>{
    if(status==='idle'){
      dispatch(fetchProducts())
    }
  },[status,dispatch])

  if(status==='loading'){
    return <h1>Loading...</h1>
  }
  console.log(products)
  return (
    <div className='container'>
      <div className="row">

        <h1>Products Page</h1>
       {products.map((v)=>(
        <div className='col-sm-4' key={v._id}>
          {/* <img src={`https://node-apis-vnla.onrender.com/${v.image}`}
           style={{height:'200px',width:'200px'}} alt={v.title} />
          <h1>{v.title}</h1> */}
          <div class="card" style={{width: '18rem'}}>
  <img src={`https://node-apis-vnla.onrender.com/${v.image}`} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{v.title}</h5>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p> */}
    <Link to={`/product/${v._id}`} className="btn btn-primary">Go somewhere</Link>
  </div>
</div>
        </div>
       )
      
      )}
      </div>
    </div>
  )
}

export default Product