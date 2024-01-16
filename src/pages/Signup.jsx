import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { CreateUserAsync } from '../features/Authslice';
export const Signup = () => {
  let dispatch=useDispatch()
  const schema = Yup.object({
    email: Yup.string().email("Email format incorrect").required("Email required"),
    password: Yup.string().required("Password required").min(6,"Password should be at least 6 length").max(12,'Password should be at max 12 length'),
    cpassword: Yup.string().oneOf([Yup.ref('password'), null], 'Confirm password correctly').required('Confirm Password Required')
  }).required();
    const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(schema)
    });
  const onSubmit = (data) => {
    console.log(data);
   dispatch(CreateUserAsync({email:data.email,password:data.password}))
  } 
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="./nikelogo.png"
            alt="Nike logo"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-blue-50">
            Sign up for buying
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form noValidate className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-blue-50">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  {...register("email")} 
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.email && <span className='text-red-600'>{errors.email.message}</span>}
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-blue-50">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input 
                          {...register("password")} 
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                    {errors.password && <span className='text-red-600'>{errors.password.message}</span>}
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-blue-50">
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                {...register("cpassword")} 
                  id="cpassword"
                  name="cpassword"
                  type="password"
                  autoComplete="current-cpassword"
                  className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.cpassword && <span className='text-red-600'>{errors.cpassword.message}</span>}
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#1e40af] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already Have Account?
            <Link to="/login" className="font-semibold leading-6 ml-2 text-[#1e40af] hover:text-blue-500">
             Login
            </Link>
          </p>
        </div>
      </div>
  )
}
