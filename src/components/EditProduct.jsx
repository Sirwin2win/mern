import React, {useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { update } from '../features/products/productSlice'
import { fetchSingle } from '../features/products/singleSlice'
import { useDispatch, useSelector } from 'react-redux'



const EditProduct = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // const [image, setImage] = useState(false)
    const [inputs, setInputs] = useState({
      title:"",
      description:'',
      price:'',
      image:null
    })
    const {product,status,error} = useSelector(state=>state.product)

     useEffect(()=>{
            if(id){
               dispatch(fetchSingle(id)) 
            }
        },[])

      useEffect(()=>{
        if(product){
          setInputs({
            title:product.title || "",
            description:product.description || "",
            price:product.price || "",
            image:product.image || "",
          })
        }
      },[product])
    const handleChange=(e)=>{
        const name = e.target.name
        const value = e.target.value
        setInputs((inputs=>({...inputs,[name]:value})))
    }
    const handleImageChange = (e)=>{
      setInputs((inputs)=>({...inputs,image:e.target.files[0]}))
    }
    const handleSubmit=(e)=>{
      e.preventDefault()
      const formData = new FormData()
      formData.append("title",inputs.title);
      formData.append("description",inputs.description);
      formData.append("price",inputs.price);
      // formData.append("image",image);
      // console.log(`${inputs.title}`)
      if(inputs.image && typeof inputs.image==='object'){
        formData.append("image",inputs.image)
      }
      dispatch(update({id:id,formData}))
      if(status==='succeeded'){
        navigate('/product')
      }
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
        <input type="file" name='image' onChange={handleImageChange} className='form-control' />
       </div>
       <input type="submit" onClick={handleSubmit} value='Create' className='form-control my-4 text-bg-primary' />
       </form>
    </div>
    </div>
  )
}

export default EditProduct