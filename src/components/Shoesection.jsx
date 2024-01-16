import React from 'react'

export const Shoesection = () => {
    return (
        <section className='flex flex-row gap-10'>
            <div className='flex flex-col px-12 py-20 gap-8 w-1/2'>
                <div className=''>
                    <h1 className='text-5xl font-bold'>Find your dream sneakers and shoes</h1>
                </div>
                <div>
                    <p className='text-sm'>Sneakers and shoes are more than just footwear;a journey of comfort and style that carries us forward, step by step.</p>
                </div>
                <div>
                <button type="button" className="text-white rounded-md bg-[#1e40af] font-medium text-sm px-5 py-2 text-center mr-2 mb-2">Explore Now</button>
                </div>
            </div>
            <div className='py-16 flex flex-col gap-3'>
            <div>
                <button type="button" className="text-white rounded-md bg-[#1e40af] font-medium text-sm px-5 py-2 text-center mr-2 mb-2">Nike air max</button>
                </div>
<div>
    <img className='w-96 h-full -rotate-45 ' src='./shoespic.png'/>
</div>

<div  className='flex justify-end'>
                <button type="button" className="text-white rounded-md bg-[#1e40af] font-medium text-2xl px-2 py-4 text-center mr-2 mb-2">50% button</button>
                </div>
           
            </div>
        </section>

    )
}
