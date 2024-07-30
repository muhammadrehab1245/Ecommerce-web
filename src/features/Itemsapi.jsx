import { Constant } from "../components/Constant";

export const Fetchallproducts = (obj) => {
  let urlstr=Query(obj)
 return new Promise(async(resolve)=>{
  const response = await fetch(`http://localhost:3000/items?_page=${obj.page}&_limit=${Constant}${urlstr}`);
  const data=response.json()
  resolve(data)
})
  };

  
export const fetchProductById = (id) => {
 return new Promise(async(resolve)=>{
  const response = await fetch(`http://localhost:3000/items?productid=${id}`);
  const data=response.json()
  resolve(data)
})
  }; 
export const Fetchcategories = () => {

 return new Promise(async(resolve)=>{
  const response = await fetch("http://localhost:3000/category");
  const data=response.json()
  resolve(data)
})
  };
export const FetchPrices = () => {

 return new Promise(async(resolve)=>{
  const response = await fetch("http://localhost:3000/range");
  const data=response.json()
  
  resolve(data)
})
  };
export const Productslength = (obj) => {
  let urlstr=Query(obj)
 return new Promise(async(resolve)=>{
  const response = await fetch(`http://localhost:3000/items?${urlstr}`);
  const data=response.json()
  
  resolve(data)
})
  };

let Query=(obj)=>{
  let filtering=obj.filters, str='', sortfilter=obj.sortOptions,sortcriteria='price'
  for(const key in filtering){
    if(filtering[key].length!==0){
      let appliedfilters=filtering[key]
      for (const fil in appliedfilters) {
        str+=`&${key}=${appliedfilters[fil]}`
      } 
    }
  }

  for(const key1 in sortfilter){
    
    if (sortfilter[key1].current) {
      const appliedfilter=sortfilter[key1]
        str+=appliedfilter['order']!=='popular'?`&_sort=${sortcriteria}&_order=${appliedfilter['order']}`:''
    }
  } 

  
  return str; // Join the array into a single string
}
