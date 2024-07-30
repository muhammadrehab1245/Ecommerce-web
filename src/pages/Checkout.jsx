import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {   SelectCart } from '../features/Cartslice'
import { createOrderAsync, selectCurrentOrder } from '../features/Orderslice'
import { Link, Navigate } from 'react-router-dom'
import { nanoid } from '@reduxjs/toolkit'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from "yup";
import { SelectIsLogin } from '../features/Authslice'
export const Checkout = () => {
  let dispatch=useDispatch()
 
  let cartitem=useSelector(SelectCart)
  let currentorder=useSelector(selectCurrentOrder)
  let isLogin=useSelector(SelectIsLogin)
  const schema = Yup.object({
    firstname: Yup.string().required("First Name required"),
    lastname: Yup.string().required("Last Name required"),
    streetaddress: Yup.string().required("Street Name required"),
    city: Yup.string().required("City Name required"),
    region: Yup.string().required("Region required"),
  }).required();
    const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(schema) 
    });
  const onSubmit = (data) => {
console.log(data)
    dispatch(createOrderAsync({id:nanoid(),userid:isLogin.data.id,status:'pending',cartitem,data}))
  } 

  console.log(currentorder && currentorder) 

    const total = cartitem.reduce((acc, item) => {
      return acc + item.ItemTotal;
    }, 0);
  


  return (
    <>
     {currentorder && (
       <Navigate to={`/orderstatus/${currentorder.id}`} replace={true} />
       )}
      { cartitem.length===0 && (
           <Navigate to={`/`} replace={true} />
      ) }
    <div className="grid grid-cols-1 px-20 text-white gap-x-12 gap-y-10 lg:grid-cols-4">
        <div className='text-white col-span-3'>
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
    <div className="space-y-12">
     

      <div className="border-b border-gray-900/10 pt-6">


        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label htmlFor="firstname" className="block text-sm font-medium leading-6">
              First name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="firstname"
                id="firstname"
                {...register("firstname")} 
                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset text-black ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="lastname" className="block text-sm font-medium leading-6 ">
              Last name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="lastname"
                id="lastname"
                {...register("lastname")} 
                className="block w-full text-black rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="streetaddress" className="block text-sm font-medium leading-6">
              Street address
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="streetaddress"
                id="streetaddress"
                {...register("streetaddress")} 
                className="block text-black w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2 sm:col-start-1">
            <label htmlFor="city" className="block text-sm font-medium leading-6">
              City
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="city"
                id="city"
                {...register("city")} 

                className="block text-black w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="region" className="block text-sm font-medium leading-6 ">
              State / Province
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="region"
                id="region"
                {...register("region")} 
                className="block text-black w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="postalcode" className="block text-sm font-medium leading-6 ">
              ZIP / Postal code
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="postalcode"
                id="postalcode"
                {...register("postalcode")} 
                className="block text-black w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-900/10 pb-12">

        <div className="mt-10 space-y-10">
          <fieldset>

            <p className="mt-1 text-sm leading-6">Payment Method</p>
            <div className="mt-6 space-y-6">
              <div className="flex items-center gap-x-3">
                <input
                  id="cash"
                  name="cash"
                  value='cash'
                  type="radio"
                  {...register("paymenttype")}
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label htmlFor="cash" className="block text-sm font-medium leading-6 ">
                 Cash
                </label>
              </div>
              <div className="flex items-center gap-x-3">
                <input
                  id="cardpayment"
                  name="cardpayment"
                  value='cardpayment'
                  type="radio"
                  {...register("paymenttype")}
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label htmlFor="cardpayment" className="block text-sm font-medium leading-6">
                  Card Payment
                </label>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>

    <button type='submit'   className="flex items-center justify-center rounded-md border border-transparent bg-[#1e40af] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-500">
                        Checkout
       
                      </button>
  </form>
  </div>

  <div className="mx-auto max-w-7xl  px-2 sm:px-6 lg:px-8">
                    <div className="mt-8 ">
                      <div className="flow-root">
                        <ul role="list" className=" divide-y divide-gray-200">
                          {cartitem.map((item) => (
                            <li key={item.id} className="flex py-6">
                              <div className="h-24 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img
                                  src={item.Imageshow}
                                  alt={'Cart'}
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>

                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex  justify-between text-base font-medium  text-blue-50">
                                    <h3>
                                     {item.name}
                                    </h3>
                                    <p className="ml-4  text-blue-50">{item.price}</p>
                                  </div>
                                  <p className="mt-1 text-sm text-gray-500">{item.selectedColor}</p>
                                </div>
                               
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
           

                  <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium">
                      <p>Subtotal</p>
                      <p>{total.toFixed(2)}</p>
                    </div>
        
                
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <p>
          
                        <button
                          type="button"
                          className="font-medium ml-2 text-indigo-600 hover:text-indigo-500"
                          onClick={() => setOpen(false)}
                        >
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                  </div>
  </div>
  </>
  )
}
