import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import { useNavigate, useParams } from 'react-router-dom'
import {  fetchProductByIdAsync, selectItemStatus, selectSingleItem } from '../features/Itemslice'
import { useSelector, useDispatch } from 'react-redux';
import { AddCartAsync, FetchcartByIdAsync } from '../features/Cartslice'
import { useEffect } from 'react'
import { SelectIsLogin } from '../features/Authslice'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const Productdet=()=> {
  const {itemId}=useParams()
  let navigate=useNavigate()
 
  const product = {
    sizes: [
      { name: 'XXS'},
      { name: 'XS' },
      { name: 'S' },
      { name: 'M' },
      { name: 'L' },
      { name: 'XL' },
      { name: '2XL' },
      { name: '3XL' },
    ],
  
  }
  let dispatch=useDispatch()
  let isLogin=useSelector(SelectIsLogin)
  console.log(isLogin.data.id)
  useEffect(() => {
 //   dispatch(FetchallproductsAsync2())
        dispatch(fetchProductByIdAsync(itemId));
       
  }, [dispatch,itemId])      
  
  
 // let ItemSelected=useSelector((state) => selectItemById(state, itemId))
  let ItemSelected=useSelector(selectSingleItem)
  let ItemStatus=useSelector(selectItemStatus)
 // console.log(ItemStatus)
 // console.log(ItemSelected)


//  const [orderItem, setOrderItem] = useState(!ItemSelected ? "":ItemSelected[0])
 const [selectedColor, setSelectedColor] = useState('');
const [Imageshow, setImageshow] = useState('');
// const [selectedColor, setSelectedColor] = useState(ItemSelected?ItemSelected[0].colors[0].color:'');
//const [Imageshow, setImageshow] = useState(ItemSelected?ItemSelected[0]?.colors[0].url:'');

  const [selectedSize, setSelectedSize] = useState(product.sizes[0].name)
 // const [Extraprop, setExtraprop] = useState({Imageshow:setImageshow,selectedColor:selectedColor,selectedSize:selectedSize,ItemTotal:orderItem.price})   
  
  const changeColor=(e)=>{
    setImageshow(e.url)
    setSelectedColor(e.color)
  /*  const updatedExtraprop = {
      ...Extraprop,
      selectedColor: e.color,
      Imageshow: e.url,
    };
    setExtraprop(updatedExtraprop); */
 
  }

  const ChangeSize=(e)=>{
    setSelectedSize(e.name)
//      setExtraprop({ ...Extraprop, selectedSize:e.name });

  }
  const addtocart=()=>{
   // console.log({...ItemSelected[0],Imageshow,selectedColor,selectedSize,ItemTotal:ItemSelected[0].price})
  //  setOrderItem({ItemSelected[0]})
  if (selectedColor) {
    dispatch(AddCartAsync({...ItemSelected[0],Imageshow,selectedColor,selectedSize,ItemTotal:ItemSelected[0].price,userid:isLogin.data.id}))

    navigate('/products')
  }
  else{
    alert('Please Choose the Color')
  }
    
   
   } 
  return (
    <>
    { ItemSelected &&
 <div className="bg-black text-white">
    <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
      <div className="lg:col-span-2 lg:pr-8">
        <h1 className="text-xl font-bold tracking-tight text-center sm:text-3xl">{ItemSelected[0].name}</h1>
        <div className="pt-5 flex justify-center">
          { Imageshow ?
          <img className="w-4/6  h-4/6" src={Imageshow} alt="Product" />
          :
          <div className='h-80 flex items-center'>  <h1 >Select the Color to show the respective Item</h1>  </div>
         
         }
        </div>
      </div>
  
    
      <div className="mt-4 lg:row-span-3 lg:mt-0">
        <h2 className="sr-only">Product information</h2>
        <p className="text-3xl tracking-tight">${ItemSelected[0].price}</p>
  
  
  
          <div>
            <h3 className="text-sm font-medium">Color</h3>
  
            <RadioGroup value={selectedColor} onChange={(e) => changeColor(e)} className="mt-4">
    
              <div className="flex items-center space-x-3">
                {ItemSelected[0].colors.map((clrs) => (
                  <RadioGroup.Option
                    key={clrs.url}
                    value={clrs} 
                    className={`border border-white relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ${
                      clrs.color === selectedColor ? 'ring-2 ring-gray-300' : ''
                    }`}
                  >
                    <RadioGroup.Label as="span" className="sr-only">
                      {clrs.name}
                    </RadioGroup.Label>
                    <span
                      aria-hidden="true"
                      style={{ backgroundColor: `${clrs.color}` }}
                      className={classNames('h-8 w-8 rounded-full border border-black border-opacity-10')}
                    />
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>
          </div>
  
    
          <div className="mt-10">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium">Size</h3>
            </div>
  
            <RadioGroup value={selectedSize} onChange={(e) => ChangeSize(e)} className="mt-4">
              <div className="grid grid-cols-4 gap-8 mt-6 sm:grid-cols-8 lg:grid-cols-4">
                {product.sizes.map((size) => (
  
                  <RadioGroup.Option
                    key={size.name}
                    value={size}
                    className={`cursor-pointer p-4  shadow-sm hover:bg-white hover:text-black ${size.name === selectedSize ? 'bg-[#1e40af]' : 'bg-black'}`}
                  >
                    <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                    <span
                      className='pointer rounded-md'
                      aria-hidden="true"
                    />
                  </RadioGroup.Option>
             
                ))}
              </div>
            </RadioGroup>
          </div>
  
          <button
          onClick={addtocart}
            className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-[#1e40af] px-8 py-3 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add to Cart
          </button>
       
      </div>
    </div>
  
  </div> }
                </>
  )
}
