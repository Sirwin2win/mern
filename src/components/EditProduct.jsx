import React, {useState} from 'react'
import { useParams } from 'react-router-dom'

const EditProduct = () => {
    const {id} = useParams()
    const [inputs, setInputs] = useState({

    })
    const handleChange=()=>{
        
    }
    const handleSubmit=()=>{

    }
  return (
    <div>
        <h1>{id}</h1>
        <div className='container'>
      <h1 className='text-primary text-center my-5'>Create Product</h1>
       <form method='post' encType='multipart/form-data'>
       <div className='mb-3'>
        <label htmlFor="title">Product Title</label>
        <input type="text" value={inputs.title} onChange={handleChange} className='form-control' id='title' name='title' placeholder='Product title' />
       </div>
       <div className='mb-3'>
        <label htmlFor="description">Product Description</label>
        <input type="text" value={inputs.description} onChange={handleChange} className='form-control' id='description' name='description' placeholder='Product description' />
       </div>
       <div className='mb-3'>
        <label htmlFor="price">Product Price</label>
        <input type="text" value={inputs.price}  onChange={handleChange} className='form-control' id='price' name='price' placeholder='Product price' />
       </div>
       <div className='mb-3'>
        <label htmlFor="image">Product Image</label>
        <input type="file" name='image' onChange={(e)=>setImage(e.target.files[0])} className='form-control' />
       </div>
       <input type="submit" onClick={handleSubmit} value='Create' className='form-control my-4 text-bg-primary' />
       </form>
    </div>
    </div>
  )
}

export default EditProduct