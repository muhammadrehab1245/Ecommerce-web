import React from 'react'
import { SiFsecure } from 'react-icons/si';
import { MdDeliveryDining } from 'react-icons/md';
import { CgCalendarToday } from 'react-icons/cg';
export const Buydet = () => {
  return (
    <section className='mt-14'>
        <div className='flex justify-center gap-4'>
            <div className='bg-[#1e40af] flex justify-center items-center h-13 w-12 rounded-md'>
                <SiFsecure fontSize={36}/>
            </div>
            <div>
                <span>
                    <h1>Secure Payment and Transactions</h1>
                </span>
                <span>
                    <p className='text-xs/7'>Secure On Order</p>
                </span>
            </div>
            <div className='bg-[#1e40af] flex justify-center items-center h-13 w-12 rounded-md'>
                <CgCalendarToday fontSize={36}/>
            </div>
            <div className='ml-2'>
                <span>
                    <h1>24/7 Support and Service</h1>
                </span>
                <span>
                    <p className='text-xs/7'>Contact us 24 hrs a day</p>
                </span>
            </div>
            <div className='bg-[#1e40af] flex justify-center items-center h-13 w-12 rounded-md'>
                <MdDeliveryDining fontSize={36}/>
            </div>
            <div className='ml-2'>
                <span>
                    <h1>Fast Delivery of Product</h1>
                </span>
                <span>
                    <p className='text-xs/7'>Fast delivery guarantee on order</p>
                </span>
            </div>
        </div>
    </section>
  )
}
