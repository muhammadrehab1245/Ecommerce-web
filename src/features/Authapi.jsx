import axios from "axios";

export const CreateUser = (obj) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/e-com/user/createuser",
        obj,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = response.data;
      resolve({ data });
    } catch (err) {
      reject({ error: err.message });
    }
  });
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

export const Login = (obj) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/e-com/user/loginuser",
        obj
      );

      const data = response.data;

      if (data.success) {
        resolve({ data });
      } else {
        reject({ error: data.error });
      }
    } catch (err) {
      reject({ error: err.message });
    }
  });
};