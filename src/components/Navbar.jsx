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
              <div className="hidden w-[100%] sm:ml-6  sm:block">
                <div className="flex justify-center  space-x-4">
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
              <div>
            <button type="button" className="mt-5 text-white rounded-xl bg-[#1e40af] font-medium text-sm px-5 py-2 text-center mr-2 mb-2">
<Link to='/login'> Login </Link>
</button>
<button type="button" className="mt-5 text-white rounded-xl bg-[#1e40af] font-medium text-sm px-5 py-2 text-center mr-2 mb-2">
<Link to='/signup'> Sign Up </Link>
</button> </div> :          <button onClick={Loggingout} type="button" className="mt-5 text-white rounded-xl bg-[#1e40af] font-medium text-sm px-5 py-2 text-center mr-2 mb-2">
<Link  to='/login'> Logout </Link>
</button>}
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
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
              <Menu as="div" className="relative ml-3">
                <div>
                  <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </Menu.Button>
                </div>
              
              </Menu>
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
                  'block rounded-md px-3 py-2 text-base font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </Disclosure.Button>
            ))}
          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
    
  )
}
