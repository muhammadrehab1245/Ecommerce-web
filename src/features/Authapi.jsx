export const CreateUser = (obj) => {
    return new Promise(async(resolve)=>{
     const response = await fetch(`http://localhost:3000/users`,{
         method: 'POST',
         headers: { 'content-type': 'application/json' },
         body: JSON.stringify(obj)
     });
     const data=response.json()
     
     resolve({data})
   })
     };
export const CheckUser = (obj) => {
    return new Promise(async(resolve,reject)=>{
     const response = await fetch(`http://localhost:3000/users/?email=${obj.email}`)
  const data = await response.json();

     if (data.length) {
        if(data[0].password!==obj.password){
            reject({message:"Wrong Credentials"})
        }
        else{

            resolve({data:data[0]})
        }   }
        else{

            reject({message:"User not found"})
        }
   })
     };