import React from 'react'
import { Orderbyid } from "./OrderByid"
import { OrderList } from "./OrderList"
import { useSelector } from 'react-redux'
import { SelectIsLogin } from '../features/Authslice'

export const IsAdminorNot = () => {
    let isLogin=useSelector(SelectIsLogin)
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <h1 className="text-5xl">{isLogin?.data?.isAdmin?'Customer Orders':'Your Orders'}</h1>
{isLogin.data.isAdmin ? <OrderList/> : <Orderbyid/>}
</div>
  )
}
