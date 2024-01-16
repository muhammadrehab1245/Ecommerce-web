import React, { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { FetchOrderAsync, SelectOrderStatus, resetOrder, selectCurrentOrder, selectOrderById } from '../features/Orderslice'
import { useDispatch, useSelector } from 'react-redux'
import { EmptyingCardAsync, SelectCart } from '../features/Cartslice'

export const Orderstatus = () => {
    const {orderid}=useParams()
    console.log(orderid)
    let dispatch=useDispatch()
    let cartitem=useSelector(SelectCart)
   let orderStatus=useSelector(SelectOrderStatus)
   const orderedfind = useSelector((state) => selectOrderById(state, orderid))
 
 
    let content;
    
    if (orderStatus==='loading') {
      content=<div className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-[#1e40af] rounded-full dark:text-blue-500" role="status" aria-label="loading">
      <span class="sr-only">Loading...</span>
    </div>
    }
    else if(orderStatus==='succeeded'){
   

if (orderedfind===undefined) {
content=<> <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Order Number Incorrect</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">UnAuthorized Order Id</p></>
}
else if(orderedfind.id===orderid) {
content= <> <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Order Number {orderid}</h1>
<p className="mt-6 text-base leading-7 text-gray-600">Order Proposal Send to Admin ! Now wait for admin to accept order</p></>   
}           

}

useEffect(() => {

    dispatch(resetOrder())
    dispatch(EmptyingCardAsync(cartitem)) 
  
  
      }, [dispatch, orderid,orderStatus]) 

     
  return (
    <>
    {!orderid &&  <Navigate to='/' replace={true}></Navigate>}
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div className="text-center">
      {content}
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
       to='/'
          className="rounded-md bg-[#1e40af] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Go back home
        </Link>
      </div>
    </div>
  </main>
  </>
  )
}
