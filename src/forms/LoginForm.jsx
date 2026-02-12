import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../features/auth/authSlice'



const LoginForm = () => {
  const [inputs, setInputs] = useState({
    email:'',
    password:''
  })
  const {user,status,error} = useSelector(state=>state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleChange = (e)=>{
    const name = e.target.name
    const value = e.target.value
    setInputs(inputs=>({...inputs,[name]:value}))
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch(login(inputs))
    if(status==='succeeded'){
      navigate('/product-table')
    }
    
  }
  return (
   <div className='container'>
      <h1 className='text-primary text-center my-5'>Login User</h1>
       <form method='post' encType='multipart/form-data'>
       <div className='mb-3'>
        <label htmlFor="email">Email</label>
        <input type="text" value={inputs.email} onChange={handleChange} className='form-control' id='email' name='email' placeholder='email@example.com' />
       </div>
       <div className='mb-3'>
        <label htmlFor="password">Password</label>
        <input type="password" value={inputs.password}  onChange={handleChange} className='form-control' id='password' name='password' placeholder='Password' />
       </div>
       {/* <input type="submit" onClick={handleSubmit} value='Login' className='form-control my-4 text-bg-primary' /> */}
       <button className='form-control my-4 text-bg-primary' onClick={handleSubmit}>{status==='loading'?'Login you in...':'Login'}</button>
       </form>
    </div>
  )
}

export default LoginForm