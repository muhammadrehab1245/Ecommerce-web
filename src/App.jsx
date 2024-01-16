import './App.css'
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Productpage } from './pages/Productpage';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { Productdet } from './components/Productdet';
import { PageNot } from './pages/PageNot';
import { Orderstatus } from './pages/Orderstatus';
import { Protect } from './components/Protect';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SelectIsLogin } from './features/Authslice';
import { FetchcartByIdAsync } from './features/Cartslice';
function App() {
  let dispatch=useDispatch()
  let isLogin=useSelector(SelectIsLogin)
  console.log(isLogin)
  useEffect(() => {
    //  dispatch(FetchcartAsync())
    if (isLogin) {
      console.log(isLogin.data.id)
      dispatch(FetchcartByIdAsync(isLogin.data.id))
    }
  
    }, [isLogin])

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <Protect>
              <Home />
            </Protect>
          } />
          <Route path="/products" element={
            <Protect>
              <Productpage />
            </Protect>
          } />
          <Route path="/signup" element={
            <Signup />

          } />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Protect><Cart /></Protect>} />
          <Route path="/checkout" element={<Protect><Checkout /></Protect>} />
          <Route path="/propage/:itemId" element={<Protect><Productdet /></Protect>} />
          <Route path="/orderstatus/:orderid" element={<Protect><Orderstatus /></Protect>} />
          <Route path="*" element={<PageNot />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
