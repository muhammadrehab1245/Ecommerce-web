import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom'
import * as Yup from "yup";
import { CheckUserAsync, SelectError, SelectIsLogin } from '../features/Authslice';
import { useForm } from 'react-hook-form';
export const Login = () => {
  let dispatch=useDispatch()
  let Loginerror=useSelector(SelectError)
  let Loginstatus=useSelector(SelectIsLogin)
  const schema = Yup.object({
    email: Yup.string().email("Email format incorrect").required("Email required"),
    password: Yup.string().required("Password required")
  }).required();
    const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(schema) 
    });
  const onSubmit = (data) => {
    console.log(data);
   dispatch(CheckUserAsync({email:data.email,password:data.password}))
  } 
  console.log(Loginerror)
  return (
  <>
  {Loginstatus && <Navigate to='/' replace={true}/>}
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        className="mx-auto h-10 w-36"
        src="./nikelogo.png"
        alt="Nike logo"
      />
      <h2 className="mt-10 text-center text-blue-50 text-2xl font-bold leading-9 tracking-tight">
        Log in to your account
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6" >
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-blue-50">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              {...register("email")} 
              className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
                {errors.email && <span className='text-red-600'>{errors.email.message}</span>}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-blue-50">
              Password
            </label>
            <div className="text-sm">
              <a href="#" className="font-semibold text-[#1e40af] hover:text-blue-500">
                Forgot password?
              </a>
            </div>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              {...register("password")} 
              className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
              {errors.password && <span className='text-red-600'>{errors.password.message}</span>}
          </div>
        </div>
<div className='text-red-600'>{Loginerror && Loginerror}</div>
        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-[#1e40af] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Login
          </button>
        </div>
      </form>

      <p className="mt-10  text-center text-sm text-gray-500">
        Already Have an Account?
        <Link to="/login" className="font-semibold leading-6 ml-2 text-[#1e40af] hover:text-blue-500">
          Login
        </Link>
      </p>
    </div>
  </div>
  </>
  )
}
