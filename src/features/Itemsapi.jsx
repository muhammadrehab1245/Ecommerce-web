import axios from "axios";
import { Constant } from "../components/Constant";

// export const Fetchallproducts = (obj) => {
//   let urlstr=Query(obj)
//   console.log(urlstr)
//  return new Promise(async(resolve)=>{
//   const response = await fetch(`http://localhost:3000/items?_page=${obj.page}&_limit=${Constant}${urlstr}`);
//   const data=response.json()
//   resolve(data)
// })
//   };

export const Fetchallproducts = (obj) => {
  let urlstr = Query(obj);
  console.log(urlstr);

  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/e-com/items/fetchallproducts?page=${obj.page}&limit=${Constant}${urlstr}`
      );
      console.log(response,'res');
      resolve(response.data);
    } catch (err) {
      reject({ error: err.message });
    }
  });
};

  
export const fetchProductById = (id) => {
 return new Promise(async(resolve)=>{
  const response = await fetch(`http://localhost:3000/items?productid=${id}`);
  const data=response.json()
  resolve(data)
})
  }; 
// export const Fetchcategories = () => {

//  return new Promise(async(resolve)=>{
//   const response = await fetch("http://localhost:3000/category");
//   const data=response.json()
//   resolve(data)
// })
//   };
// export const FetchPrices = () => {

//  return new Promise(async(resolve)=>{
//   const response = await fetch("http://localhost:3000/range");
//   const data=response.json()
  
//   resolve(data)
// })
//   };

export const Fetchcategories = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get("http://localhost:5000/e-com/items/fetchcategory");
      resolve(response.data);
    } catch (err) {
      reject({ error: err.message });
    }
  });
};

export const FetchPrices = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get("http://localhost:5000/e-com/items/fetchprices");
      resolve(response.data);
    } catch (err) {
      reject({ error: err.message });
    }
  });
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
  console.log(obj)
  let filtering=obj.filters, str='', sortfilter=obj.sortOptions,sortcriteria='price'
  console.log(sortfilter)
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
