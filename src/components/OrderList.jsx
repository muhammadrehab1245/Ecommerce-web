import React, { useEffect } from 'react'
import { FetchOrderAsync, SelectOrder, updateOrderStatusAsync } from '../features/Orderslice'
import { useDispatch, useSelector } from 'react-redux'

export const OrderList = () => {
    let dispatch=useDispatch()

    useEffect(() => {
      dispatch(FetchOrderAsync());

}, [dispatch])   
    let orders=useSelector(SelectOrder)

    const changeOrderStatus = (event, obj) => {
      let statusupdate=event.target.innerText==='Reject'?'rejected':'accepted'

        dispatch(updateOrderStatusAsync({...obj, status:statusupdate }));
      }
 
  
  
  return (
    <>

      { orders.length===0?<h1 className='text-center mt-10'>Order List are empty</h1>
     : orders && orders.map(orderlist => (
        <div key={orderlist.id} className="mt-8">
          <div className="flow-root">
         
              {orderlist?.cartitem?.map(orderseq => (
                <li key={orderseq.id} className="flex py-6">
                  <div className="h-24 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={orderseq.Imageshow}
                      alt='Cart'
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div className="flex mb-4 justify-between text-base font-medium text-blue-50">
                      <div className="flex flex-col gap-2">
                        <h3>{orderseq.name}</h3>
                        <p className="text-blue-50">TotalItem Price: ${orderseq.ItemTotal}</p>
                      </div>
                      <p className="ml-4 text-blue-50">Item Price: ${orderseq.price}</p>
                    </div>

                    <div className="gap-3 mt-5 mb-4">
                      <div className="flex gap-3">
                        <p className="mt-1 text-md text-gray-500">Selected Color:</p>
                        <button
                          aria-hidden="true"
                          style={{ backgroundColor: orderseq.selectedColor }}
                          className="h-6 w-6 rounded-full border border-black border-opacity-10"
                        />
                      </div>
                      <div className="flex gap-3">
                        <p className="mt-1 text-md text-gray-500">Selected Size :</p>
                        <p className="text-2xl">{orderseq.selectedSize}</p>

       
                      </div>
                   
                    </div>
                  </div>
                </li>
              ))}


   <div className="flex justify-between text-base font-medium text-gray-900">
            <p className='text-white'>Customer Name : {orderlist.data.firstname.concat(" ",orderlist.data.lastname)}</p>
          </div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p className='text-white'>Total Bill : {orderlist?.cartitem?.reduce((total, num)=>{return (total + num.price)}, 0).toFixed(2)}</p>
          </div>
     
          </div>
          {orderlist.status==='pending'?
                        <div  className="flex gap-3">
                       <button 
  onClick={(e) => changeOrderStatus(e, orderlist)} 
  type="submit"   
  className="flex items-center justify-center rounded-md border border-transparent bg-[#1e40af] px-3 py-1 text-base font-medium text-white shadow-sm hover:bg-indigo-500"
>
  Accept
</button>
<button 
  onClick={(e) => changeOrderStatus(e, orderlist)} 
  type="submit"   
  className="flex items-center justify-center rounded-md border border-transparent bg-[#1e40af] px-3 py-1 text-base font-medium text-white shadow-sm hover:bg-indigo-500"
>
  Reject
</button>
</div>
                      : <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">{orderlist.status}</span>
}
          <div className="border-t border-gray-200 px-4 py-6 mt-6 sm:px-6"></div>
          
        </div>

        
      ))}
 </>
  );
};