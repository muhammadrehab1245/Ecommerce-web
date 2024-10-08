export const AddCart = (obj) => {
  
   return new Promise(async(resolve)=>{
     const { colors, ...restobj } = obj;
     const findingItem = await fetch(`http://localhost:3000/carts?userid=${obj.userid}&productid=${obj.productid}`);
     const existingCartItem = await findingItem.json();
     if (existingCartItem.length===0) {
    const response = await fetch(`http://localhost:3000/carts`,{
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(restobj)
    });
    const data=response.json()
    
    resolve(data)
     }
    
  })
    };

    
export const AvoidRepeatCartItem = (obj) => {
   return new Promise(async(resolve)=>{
     const findingItem = await fetch(`http://localhost:3000/carts?userid=${obj.userid}&productid=${obj.productid}`);
     const data = await findingItem.json();
     if (data.length!==0) {
      resolve({data:data[0]})
     }
    // console.log(existingCartItem)
    //  resolve({existingCartItem})
  })
    }; 

  export  const EmptyingCard=async (obj)=>{
     for (const items of obj) {
        await DeleteCart(items.id)
      }
    }

    export const FetchCart = () => {

      return new Promise(async(resolve)=>{
        const response = await fetch(`http://localhost:3000/carts`,{
          method: 'GET',
          headers: { 'content-type': 'application/json' },
      });
       const data=response.json()
       resolve(data)
     })
       };
    export const FetchcartById = (userid) => {

      return new Promise(async(resolve)=>{
        const response = await fetch(`http://localhost:3000/carts?userid=${userid}`,{
          method: 'GET',
          headers: { 'content-type': 'application/json' },
      });
       const data=response.json()
       resolve(data)
     })
       };
    export const DeleteCart = (deleteid) => {
      return new Promise(async(resolve)=>{
        const response = await fetch(`http://localhost:3000/carts/${deleteid}`,{
          method: 'DELETE',
          headers: { 'content-type': 'application/json' },
      });
      const data = await response.json();
      resolve({ data: { id: deleteid } });
      })
       };
    export const UpdateCart = (obj) => {
      console.log(obj)
      return new Promise(async(resolve)=>{
        const response = await fetch(`http://localhost:3000/carts/${obj.id}`,{
          method: 'PUT',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(obj)
      });
       const data=response.json()
       resolve(data)
     })
       };