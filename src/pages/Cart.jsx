import React, { useEffect } from 'react'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteCartAsync, EmptyingCardAsync, FetchcartAsync, SelectCart, UpdateCartAsync } from '../features/Cartslice'
import { HiTrash } from 'react-icons/hi';
import { AiFillMinusSquare,AiFillPlusCircle } from 'react-icons/ai';
import { createOrderAsync } from '../features/Orderslice'
import { nanoid } from '@reduxjs/toolkit'
import { Link } from 'react-router-dom'

export const Cart = () => {
    const [open, setOpen] = useState(true)
    let dispatch=useDispatch()
  /*useEffect(() => {
    dispatch(FetchcartAsync())
  }, [])  */
  let cartitem=useSelector(SelectCart)


  const ordering=()=>{
    dispatch(createOrderAsync({id:nanoid(),cartitem}))
    dispatch(EmptyingCardAsync(cartitem))
  }
  const handleQuantity = (e, item) => {
    dispatch(UpdateCartAsync({...item, defaultquantity: parseInt(e.target.value) }));
  };
  const deleteItems=(e,deleteid)=>{
    dispatch(DeleteCartAsync(deleteid))
  }

  if (cartitem.length===0) {
    return (
      <h1 className='text-3xl text-center'>Cart is empty</h1>
    )
  }
  return (
   
<>
<div className="mx-auto max-w-7xl  px-2 sm:px-6 lg:px-8">
    <h1 className='text-5xl'>Cart</h1>
                    <div className="mt-8 ">
                      <div className="flow-root">
                        <ul role="list" className=" divide-y divide-gray-200">
                          {cartitem.map((product) => (
                            <li key={product.id} className="flex py-6">
                              <div className="h-24 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img
                                  src={product.Imageshow}
                                  alt='Cart'
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>

                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex mb-4 justify-between text-base font-medium  text-blue-50">
                                    <div className='flex flex-col gap-2'>    
                                    <h3>
                                  {product.name}
                                    </h3>
                                    <p className="text-blue-50">TotalItem Price: ${product.ItemTotal}</p>
                                    </div>
                                    
                                    <p className="ml-4 text-blue-50">Item Price:${product.price}</p>
                                  </div>
                                
                                  <div className="text-gray-500">
                                 
                          <label
                            htmlFor="quantity"
                            className="inline mr-5 mt-4 font-medium leading-6 text-lg text-white"
                          >
                            Qty :
                          </label>
                          <select
                            onChange={(e) => handleQuantity(e, product)}
                            value={product.defaultquantity}
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                        </div>
                                  <div className='gap-3 mt-5 mb-4'>
                                    <div className='flex gap-3'>
                                  <p className="mt-1 text-md text-gray-500">Selected Color:</p>
                                  <button
                    aria-hidden="true"
                    style={{ backgroundColor: `${product.selectedColor}` }}
                    className={'h-6 w-6 rounded-full border border-black border-opacity-10'}
                  />
                  </div>
                                    <div className='flex gap-3'>
                                  <p className="mt-1 text-md text-gray-500">Selected Size : </p>
                           <p className='text-2xl'>{product.selectedSize}</p>
                  </div>
                                </div>
                                </div>
                                <div className="flex mb-6  flex-1 items-end justify-between text-sm">
                              <div>
                                
                          {     /* <label htmlFor="cars">Quantity</label>

<select className='ml-2' name="qty" id="qty">
  <option value="1">1</option>
  <option value="2">2</option>
</select> */
}

         
                  </div>


                                  <div className="flex">
                                    <button
                                      type="button"
                                      onClick={e=>deleteItems(e,product.id)}
                                    >
                                      <HiTrash fontSize={27}/>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
           

                  <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>$262.00</p>
                    </div>
        
                    <div className="mt-6">
                      <button>

                      <Link
  to='/checkout'
                        className="flex items-center justify-center rounded-md border border-transparent bg-[#1e40af] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700"
                        >
                        Checkout
                      </Link>
                        </button>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <p>
                        or
                        <button
                          type="button"
                          className="font-medium ml-2 text-[#1e40af] hover:text-blue-700"
                          onClick={() => setOpen(false)}
                        >
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                  </div>
                  </>
  )
}
