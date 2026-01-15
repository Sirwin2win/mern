import React,{useState} from 'react'
import { createProduct } from '../features/products/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'




const CreateProductForm = () => {
  const {status} = useSelector(state=>state.products)
  // initialize states
  const [image, setImage] = useState(false)
  const [inputs,setInputs] = useState({
    title:'',
    description:'',
    price:''
  })
  // initialize useDispatch
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // onChange event handler
  const handleChange = (e)=>{
    const name = e.target.name
    const value = e.target.value
    setInputs((inputs)=>({...inputs,[name]:value}))
  }

  // handling form submit
  const handleSubmit = async(e)=>{
    e.preventDefault()
    // Initialize new FormData() so that we can bundle input and file(image) together
    const formData = new FormData()
    formData.append("title",inputs.title);
    formData.append("description",inputs.description);
    formData.append("price",inputs.price);
    formData.append("image",image);
    console.log(formData)
    dispatch(createProduct(formData))
    if(status==='succeeded'){
      navigate('/product')
    }


  }
  return (
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
  )
}

export default CreateProductForm