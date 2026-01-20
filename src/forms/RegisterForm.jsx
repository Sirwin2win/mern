import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'


const RegisterForm = () => {
    const [inputs, setInputs] = useState({
        name:'',
        email:'',
        password:''
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (e)=>{
        const name = e.target.name
        const value = e.target.value
        setInputs(inputs=>({...inputs,[name]:value}))
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(register(inputs))
        // navigate('/login')
    }
  return (
     <div className='container'>
      <h1 className='text-primary text-center my-5'>Register User</h1>
       <form method='post' encType='multipart/form-data'>
       <div className='mb-3'>
        <label htmlFor="name">Name</label>
        <input type="text" value={inputs.name} onChange={handleChange} className='form-control' id='name' name='name' placeholder='Full Name' />
       </div>
       <div className='mb-3'>
        <label htmlFor="email">Email</label>
        <input type="text" value={inputs.email} onChange={handleChange} className='form-control' id='email' name='email' placeholder='email@example.com' />
       </div>
       <div className='mb-3'>
        <label htmlFor="password">Password</label>
        <input type="password" value={inputs.password}  onChange={handleChange} className='form-control' id='password' name='password' placeholder='Password' />
       </div>
       <input type="submit" onClick={handleSubmit} value='Register' className='form-control my-4 text-bg-primary' />
       </form>
    </div>
  )
}

export default RegisterForm