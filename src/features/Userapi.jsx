export const FetchLoginUser=(id)=>{
    return new Promise(async(resolve)=>{
        const response = await fetch(`http://localhost:3000/users/${id}`,{
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        });
        const data=response.json()
        
        resolve(data)
      })
}
export const FetchLoginOrder=(id)=>{
    return new Promise(async(resolve)=>{
        const response = await fetch(`http://localhost:3000/orders/${id}`,{
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        });
        const data=response.json()
        
        resolve(data)
      })
}