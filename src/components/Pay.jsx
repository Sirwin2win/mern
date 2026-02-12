import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

const Pay = () => {
    const {state} = useLocation()
  return (
    <div>
        <h1>Pay Here</h1>
    </div>
  )
}

export default Pay