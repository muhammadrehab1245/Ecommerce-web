import React, { useEffect } from 'react'
import { BsCartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { FetchcartAsync, FetchcartByIdAsync, SelectCart } from '../features/Cartslice';
import { useDispatch, useSelector } from 'react-redux';
import { SelectIsLogin } from '../features/Authslice';
import { FetchLoginOrderAsync } from '../features/Userslice';

export const Navbar = () => {
  let dispatch=useDispatch()
  let isLogin=useSelector(SelectIsLogin)
  console.log(isLogin)
  useEffect(() => {
  //  dispatch(FetchcartAsync())
  if (isLogin) {
    dispatch(FetchcartByIdAsync(isLogin.data.id))
  }

  }, [isLogin]) 
  let cartlength=useSelector(SelectCart)
  return (
<header className='bg-neutral-900 text-white'>
  <nav className='flex justify-between p-7 items-center'>
    <div className=''>
      <img className='w-24' src='./nikelogo.png'></img>
    </div>
    <div>
      <ul className='flex items-center gap-7'>
      <li>
        <Link to='/' className=''>Home</Link>
      </li>
        <li>
        <Link to='/products' className=''>Products</Link>
        </li>
        <li>
        <Link to='/order' className=''>Order</Link>
        </li>
      </ul>
    </div>
    { 
    <div>
    <button type="button" className="mt-5 text-white rounded-xl bg-[#1e40af] font-medium text-sm px-5 py-2 text-center mr-2 mb-2">
     <Link to='/login'> Login </Link>
      </button>
    <button type="button" className="mt-5 text-white rounded-xl bg-[#1e40af] font-medium text-sm px-5 py-2 text-center mr-2 mb-2">
    <Link to='/signup'> Sign Up </Link>
    </button>
      <button className='relative top-2'>
      <Link  to={'/cart'} >
      <BsCartFill className='text-xl'/>
      </Link>
      </button>
      <span className="inline-flex items-center rounded-md bg-[#2563eb] relative right-2 bottom-3  px-2 py-1 text-xs font-medium text-[#e2e8f0] ring-1 ring-inset ring-blue-700/10">
      {cartlength.length}
      </span>
    </div> }
  </nav>
</header>
  )
}
