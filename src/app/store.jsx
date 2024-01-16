import { configureStore } from '@reduxjs/toolkit'
import Itemslice from '../features/Itemslice'
import Cartslice from '../features/Cartslice'
import Orderslice from '../features/Orderslice'
import Authslice from '../features/Authslice'
import Userslice from '../features/Userslice'


export default configureStore({
  reducer: {
    items:Itemslice,
    carts:Cartslice,
    orders:Orderslice,
    users:Authslice,
    authusers:Userslice
  }
})