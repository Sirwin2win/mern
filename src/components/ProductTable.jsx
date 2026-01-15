import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, fetchProducts } from '../features/products/productSlice'
import { Link } from 'react-router-dom'
import { FaEdit, FaTrashAlt } from "react-icons/fa";





const ProductTable = () => {
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
        <h1>Product Table</h1>
        <table className='table'>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product=>(
                    <tr>
                        <td>{product.title}</td>
                        <td><img src={`https://node-apis-vnla.onrender.com/${product.image}`} style={{height:'80px',width:'80px'}} /></td>
                        <td>{product.price}</td>
                        <td><Link to={`/edit-product/${product._id}`}>
                        <FaEdit className='text-warning' /></Link> | <FaTrashAlt className='text-danger' onClick={()=>dispatch(deleteProduct(product._id))} />
</td>
                    </tr>
                ))}
            </tbody>

        </table>
    </div>
  )
}

export default ProductTable