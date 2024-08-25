import React, { useEffect } from 'react'
import { BsCartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import {  FetchcartByIdAsync, SelectCart } from '../features/Cartslice';
import { useDispatch, useSelector } from 'react-redux';
import { LogOut, SelectIsLogin } from '../features/Authslice';
import { FetchLoginOrderAsync } from '../features/Userslice';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export const Navbar = () => {
  let dispatch=useDispatch()
  let isLogin=useSelector(SelectIsLogin)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: isLogin?.data?.isAdmin?'Order':'Your Order', href: '/orders'},
  ]

  useEffect(() => {
  if (isLogin) {
    dispatch(FetchcartByIdAsync(isLogin.data.id))
  }

  }, [isLogin]) 
  let cartlength=useSelector(SelectCart)
  const Loggingout=()=>{
    dispatch(LogOut())
  }
  return (
    <Disclosure as="nav" className="bg-neutral-900 text-white">
    {({ open }) => (
      <>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="h-8 w-auto"
                  src='./nikelogo.png'
                  alt="Your Company"
                />
              </div>
              <div className="hidden w-[100%]  sm:ml-6  sm:block">
                <div className="flex justify-center   space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900  text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            { !isLogin ?
              <div className='xs:hidden lg:block'>
            <button type="button" className="mt-5 text-white rounded-xl bg-[#1e40af] font-medium text-sm px-5 py-2 text-center mr-2 mb-2">
<Link to='/login'> Login </Link>
</button>
<button type="button" className="mt-5 text-white rounded-xl bg-[#1e40af] font-medium text-sm px-5 py-2 text-center mr-2 mb-2">
<Link to='/signup'> Sign Up </Link>
</button> </div> :      <div className='xs:hidden lg:block'>    <button onClick={Loggingout} type="button" className="mt-5 text-white rounded-xl bg-[#1e40af] font-medium text-sm px-5 py-2 text-center mr-2 mb-2">
<Link  to='/login'> Logout </Link>
</button> </div> }
            <div className="absolute xs:hidden lg:block  inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            { isLogin && !isLogin.data.isAdmin ? <div> <button className='relative top-2'>
              
              <Link to={'/cart'} >
              <BsCartFill className='text-xl'/>
              </Link>
              </button>
              <span className="inline-flex items-center rounded-md bg-[#2563eb] relative right-2 bottom-3 px-2 py-1 text-xs font-medium text-[#e2e8f0] ring-1 ring-inset ring-blue-700/10">
              {cartlength.length}
              </span>             </div>
                 :'' }
              {/* Profile dropdown */}
            
            </div>
          </div>
        </div>

        <Disclosure.Panel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <Disclosure.Button
                key={item.name}
                as="a"
                href={item.href}
                className={classNames(
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-center text-base font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </Disclosure.Button>
            ))}
                  { !isLogin ?
              <div className='flex flex-col items-center'>
            <button type="button" className="mt-5 text-white rounded-xl bg-[#1e40af] font-medium text-sm px-5 py-2 text-center mr-2 mb-2">
<Link to='/login'> Login </Link>
</button>
<button type="button" className="mt-5 text-white rounded-xl bg-[#1e40af] font-medium text-sm px-5 py-2 text-center mr-2 mb-2">
<Link to='/signup'> Sign Up </Link>
</button> </div> :        <div className='flex justify-center'> <button onClick={Loggingout} type="button" className="mt-5 text-white rounded-xl bg-[#1e40af] font-medium text-sm px-5 py-2 text-center mr-2 mb-2">
<Link  to='/login'> Logout </Link>
</button> </div> }
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            { isLogin && !isLogin.data.isAdmin ? <div> <button className='xs:absolute xs:top-7 xs:right-5 lg:relative lg:top-2'>
              
              <Link to={'/cart'} >
              <BsCartFill className='text-xl'/>
              </Link>
              </button>
              <span className="inline-flex items-center rounded-md bg-[#2563eb] xs:absolute xs:top-2 xs:right-2 xs: lg:relative lg:right-2 lg:bottom-3 px-2 py-1 text-xs font-medium text-[#e2e8f0] ring-1 ring-inset ring-blue-700/10">
              {cartlength.length}
              </span>             </div>
                 :'' }
          </div>
          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
    
  )
}
