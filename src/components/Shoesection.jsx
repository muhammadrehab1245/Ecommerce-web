import React from 'react'

export const Shoesection = () => {
    return (
        <section className='flex xs:flex-col  lg:flex-row gap-10'>
<div className='flex flex-col px-12 py-20 gap-8 xs:w-full lg:w-1/2  '>
                <div >
                    <h1 className='text-5xl  font-bold'>Find your dream sneakers and shoes</h1>
                </div>
                <div>
                    <p className='text-sm'>Sneakers and shoes are more than just footwear.A journey of comfort and style that carries us forward, step by step.</p>
                </div>
                <div>
                <button type="button" className="text-white rounded-md bg-[#1e40af] font-medium text-sm px-5 py-2 text-center mr-2 mb-2">Explore Now</button>
                </div>
            </div>
            <div className='py-16 flex flex-col gap-3'>
            <div className='flex xs:justify-center lg:justify-normal'>
                <button type="button" className="text-white  rounded-md bg-[#1e40af] font-medium text-sm px-5 py-2 text-center mr-2 mb-2">Nike air max</button>
                </div>
<div className='flex xs:justify-center lg:justify-normal'>
    <img className='w-96 h-full xs:mt-16 lg:mt-0 -rotate-45 ' src='./shoespic.png'/>
</div>

<div  className='flex xs:justify-center xs:mt-24 lg:mt-0 lg:justify-end'>
                <button type="button" className="text-white rounded-md bg-[#1e40af] font-medium text-2xl px-2 py-4 text-center mr-2 mb-2">50% button</button>
                </div>
           
            </div>
        </section>

    )
}
