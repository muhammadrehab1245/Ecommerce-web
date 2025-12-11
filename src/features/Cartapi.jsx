import axios from "axios";
// export const AddCart = (obj) => {

//    return new Promise(async(resolve)=>{
//      const { colors, ...restobj } = obj;
//      const findingItem = await fetch(`http://localhost:3000/carts?userid=${obj.userid}&productid=${obj.productid}`);
//      const existingCartItem = await findingItem.json();
//      if (existingCartItem.length===0) {
//     const response = await fetch(`http://localhost:3000/carts`,{
//         method: 'POST',
//         headers: { 'content-type': 'application/json' },
//         body: JSON.stringify(restobj)
//     });
//     const data=response.json()

//     resolve(data)
//      }

//   })
//     };

export const AddCart = (obj) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/e-com/items/addcart",
        obj,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      resolve(response.data);
    } catch (err) {
      reject({ error: err.message });
    }
  });
};


export const AvoidRepeatCartItem = (obj) => {
  return new Promise(async (resolve) => {
    const findingItem = await fetch(`http://localhost:3000/carts?userid=${obj.userid}&productid=${obj.productid}`);
    const data = await findingItem.json();
    if (data.length !== 0) {
      resolve({ data: data[0] })
    }
    // console.log(existingCartItem)
    //  resolve({existingCartItem})
  })
};

// export  const EmptyingCard=async (obj)=>{
//    for (const items of obj) {
//       await DeleteCart(items.id)
//     }
//   }

export const EmptyCart = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        "http://localhost:5000/e-com/items/emptycart",
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      resolve(response.data);
    } catch (err) {
      reject({ error: err.message });
    }
  });
};

// export const FetchCart = () => {

//   return new Promise(async(resolve)=>{
//     const response = await fetch(`http://localhost:3000/carts`,{
//       method: 'GET',
//       headers: { 'content-type': 'application/json' },
//   });
//    const data=response.json()
//    resolve(data)
//  })
//    };
export const FetchCart = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const auth = JSON.parse(localStorage.getItem("auth"));
      const response = await axios.get(
        "http://localhost:5000/e-com/items/fetchcart",
        {
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${auth.token}` },

        }
      );
      resolve(response.data);
    } catch (err) {
      reject({ error: err.message });
    }
  });
};

// export const FetchcartById = (userid) => {

//   return new Promise(async(resolve)=>{
//     const response = await fetch(`http://localhost:3000/carts?userid=${userid}`,{
//       method: 'GET',
//       headers: { 'content-type': 'application/json' },
//   });
//    const data=response.json()
//    resolve(data)
//  })
//    };

//    export const FetchcartById = (userid) => {

//   return new Promise(async(resolve)=>{
//     const response = await fetch(`http://localhost:3000/carts?userid=${userid}`,{
//       method: 'GET',
//       headers: { 'content-type': 'application/json' },
//   });
//    const data=response.json()
//    resolve(data)
//  })
//    };

export const FetchcartById = (userid) => {
  return new Promise(async (resolve, reject) => {
    const auth = JSON.parse(localStorage.getItem("auth"));
    try {
      const response = await axios.get(
        `http://localhost:5000/e-com/items/fetchcart/${userid}`,
        {
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${auth.token}` },
        }
      );
      resolve(response.data);
    } catch (err) {
      reject({ error: err.message });
    }
  });
};


// export const DeleteCart = (deleteid) => {
//   return new Promise(async(resolve)=>{
//     const response = await fetch(`http://localhost:3000/carts/${deleteid}`,{
//       method: 'DELETE',
//       headers: { 'content-type': 'application/json' },
//   });
//   const data = await response.json();
//   resolve({ data: { id: deleteid } });
//   })
//    };



export const DeleteCart = (deleteid) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.delete(
        "http://localhost:5000/e-com/items/deletecart",
        {
          headers: { "Content-Type": "application/json" },
          data: { id: deleteid }, // body me id bhejna
        }
      );

      resolve({ data: { id: deleteid } });
    } catch (err) {
      reject({ error: err.message });
    }
  });
};

// export const UpdateCart = (obj) => {
//   console.log(obj)
//   return new Promise(async(resolve)=>{
//     const response = await fetch(`http://localhost:3000/carts/${obj.id}`,{
//       method: 'PUT',
//       headers: { 'content-type': 'application/json' },
//       body: JSON.stringify(obj)
//   });
//    const data=response.json()
//    resolve(data)
//  })
//    };

export const UpdateCart = (obj) => {
  console.log(obj);
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.put(
        "http://localhost:5000/e-com/items/updatecart",
        obj,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      resolve(response.data);
    } catch (err) {
      reject({ error: err.message });
    }
  });
};