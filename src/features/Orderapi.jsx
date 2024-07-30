export const CreateOrder = (obj) => {
 // let urlstr=Query(obj)
 return new Promise(async(resolve)=>{
  const response = await fetch(`http://localhost:3000/orders`,{
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(obj)
  });

  const data=response.json()
  resolve(data)
}) 

  };

  
export const Fetchallorder = () => {
 // let urlstr=Query(obj)
 return new Promise(async(resolve)=>{
  const response = await fetch(`http://localhost:3000/orders`);
  const data=response.json()
  resolve(data)
})
  };
export const FetchOrderById = (id) => {
 // let urlstr=Query(obj)
 return new Promise(async(resolve)=>{
  const response = await fetch(`http://localhost:3000/orders?userid=${id}`);
  const data=response.json()
  resolve(data)
})
  };

export const updateOrderStatus = (obj) => {

    console.log(obj)
    return new Promise(async(resolve)=>{
      const response = await fetch(`http://localhost:3000/orders/${obj.id}`,{
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(obj)
    });
     const data=response.json()
     resolve(data)
   })

  }; 

