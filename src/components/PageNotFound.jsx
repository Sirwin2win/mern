import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div>
    <h1>404 Not Fount</h1>
    <Link to={'/'}>Home</Link>
    </div>
  )
}

export default PageNotFound