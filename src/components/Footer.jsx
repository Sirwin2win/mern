import React from 'react'
import logo from '../assets/images/logo.jpg'
import { FaFacebook,FaTwitter, FaInstagram, FaLinkedin  } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import './style.css'

const Footer = () => {
  return (
    <div className='bg-primary'>
        {/* 
        Bootstrap classes
        1. Text Start: This aligns the text to the left margin
        2. Text Center: This aligns the text to the center
        3. Text End: This aligns the text to the right margin
        Paddins
        ps[padding start]; pe[padding end]; pt[padding top]; pb[padding bottom]
        ms[margin start]; me[margin end]; mt[margin top]; mb[margin bottom]
        */}
        {/* <p className='bg-warning mx-5 my-5 ps-5 py-5 h1'>margins</p>
        <p className='bg-info h3'>padding</p>
      <h1 className='text-light'>Footer Goes Here</h1>
      <h1 className='text-center text-light'>Center</h1>
      <h1 className='text-end text-light'>Right</h1>
      <h1 className='text-uppercase text-light'>Capitalize</h1>
      <h1 className='text-lowercase text-light'>Lower</h1> */}
      <div className="row container p-5 mx-auto">
        {/* First Footer Column Started */}
        <div className="col-sm-3">
            <div className="row">
                <img className='col-sm-3' src={logo} alt='Logo' style={{height:'50px'}} />
            <h5 className='colo col-sm-6 pt-2'>BuywaterH2o</h5>
            </div>
            <p className='colo'>Healthy living begins with healthy water consumption</p>
            <div className="row">
                <div className="col-sm-3"><FaFacebook className='colo' size={25} /></div>
                <div className="col-sm-3"><FaTwitter className='colo' size={25}  /></div>
                <div className="col-sm-3"><FaInstagram  className='colo' size={25}  /></div>
                <div className="col-sm-3"><FaLinkedin   className='colo' size={25}  /></div>
            </div>
        </div>
            {/* First Footer Column Ended */}
            {/* Second Footer Column Started */}
            <div className="col-sm-3">
              <h5 className='colo'>Quick Links</h5> 
         
                <li><Link className='quick' to={'/'}>Home</Link></li>
                <li><Link className='quick' to={'/about'}>About</Link></li>
                <li><Link className='quick' to={'/contact'}>Contact</Link></li>
                <li><Link className='quick' to={'/product'}>Product</Link></li>
                <li><Link className='quick' to={'/blog'}>Blog</Link></li>
           
            </div>
            {/* Second Footer Column Ended */}
            {/* Third Footer Column Started */}
                 <div className="col-sm-3">
              <h5 className='colo '>Contact Us</h5> 
         
                <li><Link className='quick' to={'#'}>Plot E10 Ogbai Crescent</Link></li>
                <li><Link className='quick' to={'#'}>Phase 4, After Kings Care Hospital,</Link></li>
                <li><Link className='quick' to={'#'}>Kubwa, Abuja-FCT</Link></li>
                <li><Link className='quick' to={'#'}>08027000043</Link></li>
                {/* <li><Link className='quick' to={'/blog'}>Blog</Link></li> */}
           
            </div>
            {/* Third Footer Column Ended */}
            {/* Third Footer Column Started */}
                 <div className="col-sm-3">
              {/* <h5 className='colo'>Contact Us</h5>  */}
         
                <li><Link className='quick' to={'#'}>Plot E10 Ogbai Crescent</Link></li>
                <li><Link className='quick' to={'#'}>Phase 4, After Kings Care Hospital,</Link></li>
                <li><Link className='quick' to={'#'}>Kubwa, Abuja-FCT</Link></li>
                <li><Link className='quick' to={'#'}>08027000043</Link></li>
                {/* <li><Link className='quick' to={'/blog'}>Blog</Link></li> */}
           
            </div>
            {/* Third Footer Column Ended */}
      </div>
    </div>
  )
}

export default Footer